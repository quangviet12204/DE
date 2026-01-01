<?php
use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;

// Tạo nhanh toàn bộ các đường dẫn CRUD cho Product
Route::apiResource('products', ProductController::class);