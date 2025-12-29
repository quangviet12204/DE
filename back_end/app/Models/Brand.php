<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'brands';
    protected $primaryKey = 'BrandID';
    public $timestamps = false;

    protected $fillable = ['BrandName','Logo_Image','Description','CreatedAt'];
}
