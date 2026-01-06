<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'productID';
    public $timestamps = false;

    protected $fillable = [
        'BrandID',
        'ProductName',
        'Price',
        'Image',
        'Stock',
        'Description'
    ];
}
