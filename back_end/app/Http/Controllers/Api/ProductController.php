<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;


class ProductController extends Controller
{
    public function index()
    {
        $products = Product::leftJoin('Brands', 'Products.BrandID', '=', 'Brands.BrandID')
            ->select(
                'Products.ProductID',
                'Products.ProductName',
                'Products.Price',
                'Products.Image',
                'Products.Stock',
                'Brands.BrandName'
            )
            ->get();

        return response()->json($products);
    }
}
