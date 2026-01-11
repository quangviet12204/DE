<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\OrderController;

use App\Models\Order;

Route::get('/order', function() {
    return Order::all(); 
});