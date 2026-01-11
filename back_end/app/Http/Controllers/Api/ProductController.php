<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * GET /api/products
     * ?q=keyword
     * ?brand_id=1
     */
    public function index(Request $request)
    {
        $query = Product::with('brand');

        if ($q = $request->query('q')) {
            $query->where('ProductName', 'like', "%{$q}%");
        }

        if ($brandId = $request->query('brand_id')) {
            $query->where('BrandID', $brandId);
        }

        $products = $query
            ->orderByDesc('CreatedAt')
            ->paginate(12);

        return response()->json($products);
    }

    /**
     * GET /api/products/{id}
     */
    public function show($id)
    {
        $product = Product::with('brand')->find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    /**
     * POST /api/products
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'BrandID'      => 'required|exists:Brands,BrandID',
            'ProductName'  => 'required|string|max:150',
            'Price'        => 'required|numeric',
            'Stock'        => 'nullable|integer',
            'Description'  => 'nullable|string',
            'Image'        => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
        ]);

        if ($request->hasFile('Image')) {
            $data['Image'] = $request->file('Image')->store('products', 'public');
        }

        $product = Product::create($data);

        return response()->json([
            'message' => 'Product created successfully',
            'data' => $product
        ], 201);
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
            'BrandID'      => 'required|exists:Brands,BrandID',
            'ProductName'  => 'required|string|max:150',
            'Price'        => 'required|numeric',
            'Stock'        => 'nullable|integer',
            'Description'  => 'nullable|string',
            'Image'        => 'nullable|image|mimes:jpg,jpeg,png|max:5120',
        ]);

        if ($request->hasFile('Image')) {
            if ($product->Image && Storage::disk('public')->exists($product->Image)) {
                Storage::disk('public')->delete($product->Image);
            }
            $data['Image'] = $request->file('Image')->store('products', 'public');
        }

        $product->update($data);

        return response()->json([
            'message' => 'Product updated successfully',
            'data' => $product
        ]);
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

        if ($product->Image && Storage::disk('public')->exists($product->Image)) {
            Storage::disk('public')->delete($product->Image);
        }

        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}