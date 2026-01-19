<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * GET /api/products
     */
    public function index(Request $request)
{
    $query = Product::query();

    if ($q = $request->query('q')) {
        $query->where('name', 'like', "%{$q}%");
    }

    if ($brandId = $request->query('brand_id')) {
        $query->where('BrandID', $brandId);
    }

    if ($category = $request->query('category')) {
        $query->where('category', $category);
    }

    $products = $query
        ->orderByDesc('created_at')
        ->paginate(12);

    // ✅ THÊM image_url VÀO TỪNG ITEM
    $products->getCollection()->transform(function ($product) {
        $product->image_url = $product->image
            ? url($product->image)
            : null;
        return $product;
    });

    return response()->json($products);
}


    /**
     * GET /api/products/{id}
     */
    public function show($id)
{
    $product = Product::find($id);

    if (!$product) {
        return response()->json(['message' => 'Product not found'], 404);
    }

    $product->image_url = $product->image
        ? url($product->image)
        : null;

    return response()->json($product);
}


    /**
     * POST /api/products
     * Ảnh có sẵn trong public → chỉ lưu path
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'BrandID'  => 'required|integer',
            'name'     => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'price'    => 'required|numeric',
            'image'    => 'nullable|string|max:255', // VD: images/products/a.jpg
        ]);

        $product = Product::create($data);

        return response()->json($product, 201);
    }

    /**
     * PUT /api/products/{id}
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $data = $request->validate([
            'BrandID'  => 'required|integer',
            'name'     => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'price'    => 'required|numeric',
            'image'    => 'nullable|string|max:255',
        ]);

        $product->update($data);

        return response()->json($product);
    }

    /**
     * DELETE /api/products/{id}
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->delete();

        return response()->json(['message' => 'Deleted']);
    }
}
