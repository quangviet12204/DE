<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    // LIST + SEARCH + PAGINATION + JOIN BRAND
    public function index(Request $request)
    {
        $query = Product::with('brand');

        // tìm kiếm theo tên
        if ($request->has('q')) {
            $query->where('ProductName', 'LIKE', "%".$request->q."%");
        }

        // phân trang
        $products = $query->paginate(5);

        return response()->json($products, 200);
    }

    // SHOW 1 PRODUCT
    public function show($id)
    {
        $product = Product::with('brand')->find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        return response()->json($product, 200);
    }

    // CREATE PRODUCT + UPLOAD IMAGE
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'BrandID'      => 'required|integer',
            'ProductName'  => 'required|string|max:150',
            'Price'        => 'required|numeric|min:0',
            'Stock'        => 'nullable|integer|min:0',
            'Description'  => 'nullable|string',
            'Image'        => 'nullable|image|mimes:jpg,png,jpeg,webp|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $request->only(['BrandID','ProductName','Price','Stock','Description']);

        if ($request->hasFile('Image')) {
            $path = $request->file('Image')->store('products', 'public');
            $data['Image'] = $path;
        }

        $product = Product::create($data);

        return response()->json($product, 201);
    }

    // UPDATE PRODUCT + UPLOAD IMAGE
    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'BrandID'      => 'sometimes|integer',
            'ProductName'  => 'sometimes|string|max:150',
            'Price'        => 'sometimes|numeric|min:0',
            'Stock'        => 'nullable|integer|min:0',
            'Description'  => 'nullable|string',
            'Image'        => 'nullable|image|mimes:jpg,png,jpeg,webp|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product->fill($request->except('Image'));

        if ($request->hasFile('Image')) {
            $path = $request->file('Image')->store('products', 'public');
            $product->Image = $path;
        }

        $product->save();

        return response()->json($product, 200);
    }

    // DELETE PRODUCT
    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $product->delete();

        return response()->json(['message' => 'Deleted OK'], 200);
    }
}
