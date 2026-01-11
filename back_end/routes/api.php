<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AppointmentController;

Route::apiResource('products', ProductController::class);
Route::post('/appointments', [AppointmentController::class, 'store']);
Route::get('/test-appointment', function () {
    return request()->all();
});




