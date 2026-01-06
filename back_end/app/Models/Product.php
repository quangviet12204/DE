<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'Products';
    protected $primaryKey = 'ProductID';
    public $timestamps = false;

    protected $fillable = [
        'BrandID',
        'ProductName',
        'Price',
        'Image',
        'Stock',
        'Description'
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'BrandID', 'BrandID');
    }
}
