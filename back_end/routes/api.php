<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AppointmentController;

Route::apiResource('products', ProductController::class);
Route::post('/appointments', [AppointmentController::class, 'store']);
Route::get('/test-appointment', function () {
    return request()->all();
});



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
>>>>>>> dc5e65752bad77c5d578e2cbd4aca31eeb9f7ce8
