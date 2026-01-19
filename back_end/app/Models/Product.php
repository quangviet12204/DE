<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'ProductID';
    protected $keyType = 'int';
    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = [
        'name',
        'category',
        'price',
        'image',
        'BrandID',
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'BrandID', 'BrandID');
    }
}
