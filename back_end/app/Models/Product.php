<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'ProductID';
    public $timestamps = false;

    protected $fillable = [
        'BrandID','ProductName','Price','Image','Stock','Description','CreatedAt'
    ];

    // Quan hệ Product -> Brand
    public function brand()
    {
        return $this->belongsTo(Brand::class, 'BrandID', 'BrandID');
    }
}
