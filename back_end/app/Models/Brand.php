<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'Brands';
    protected $primaryKey = 'BrandID';
    public $timestamps = false;

    protected $fillable = [
        'BrandName',
        'Logo_Image',
        'Description'
    ];
}
