<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\OrderController;

// Public Routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/appointments', [AppointmentController::class, 'store']);
Route::get('/test-appointment', function () {
    return request()->all();
});

// Order Routes (Giỏ hàng/Thanh toán)
Route::post('/orders', [OrderController::class, 'store']); 
Route::get('/my-orders', [OrderController::class, 'index']);

// ADMIN ONLY (Yêu cầu đăng nhập và quyền Admin)
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);

    Route::get('/test-admin', function () {
        return response()->json(['ok' => true]);
    });
});

Route::post('/orders', [OrderController::class, 'store']); 

// Nếu bạn cần xem lại đơn hàng để test
Route::get('/my-orders', [OrderController::class, 'index']);

