<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'Products';
    protected $primaryKey = 'ProductID';

    // 1. Khai báo cột CreatedAt thay cho created_at mặc định
    const CREATED_AT = 'CreatedAt';

    // 2. Tắt cột updated_at vì database của bạn không có cột này
    const UPDATED_AT = null; 

    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'BrandID',
        'ProductName',
        'Price',
        'Image',
        'Stock',
        'Description',
        'CreatedAt'
    ];
    public function brand()
{
    // Một sản phẩm thuộc về một thương hiệu
    return $this->belongsTo(Brand::class, 'BrandID', 'BrandID');
}
}