<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

// PUBLIC (guest)
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);

// ADMIN ONLY
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);

    Route::get('/test-admin', function () {
        return response()->json(['ok' => true]);
    });
});
