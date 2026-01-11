<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
  public function store(Request $request)
{
    // 1. Kiểm tra dữ liệu (Sửa 'cart' thành bắt buộc)
    $validator = Validator::make($request->all(), [
        'FullName' => 'required|string|max:255',
        'Phone' => 'required|string|max:20',
        'ProvinceID' => 'required',
        'DistrictID' => 'required',
        'WardID' => 'required',
        'TotalAmount' => 'required|numeric',
        'cart' => 'required|array', 
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    DB::beginTransaction();
    try {
        // A. Lưu bảng Orders
        $order = Order::create([
            'UsersID'       => $request->UsersID,
            'FullName'      => $request->FullName,
            'Phone'         => $request->Phone,
            'ProvinceID'    => $request->ProvinceID,
            'DistrictID'    => $request->DistrictID,
            'WardID'        => $request->WardID,
            'AddressDetail' => $request->AddressDetail,
            'ShippingFee'   => $request->ShippingFee ?? 30000,
            'PaymentMethod' => $request->PaymentMethod,
            'TotalAmount'   => $request->TotalAmount,
            'Status'        => 'Pending',
        ]);

        // B. Lưu bảng OrderDetails (Khớp với map từ React)
        foreach ($request->cart as $item) {
            OrderDetail::create([
                'OrderID'   => $order->id,
                'ProductID' => $item['ProductID'],
                'Quantity'  => $item['Quantity'], // Khớp chữ Q viết hoa
                'Price'     => $item['Price'],    // Khớp chữ P viết hoa
            ]);
        }

        DB::commit();
        return response()->json(['message' => 'Thành công!'], 201);

    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json(['message' => $e->getMessage()], 500);
    }
}
}