<?php

use Illuminate\Support\Facades\Route;
use app\Http\Controllers\Api\ProductController;

Route::apiResource('products', ProductController::class);

