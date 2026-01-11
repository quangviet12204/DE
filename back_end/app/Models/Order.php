<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    
    protected $fillable = [
        'UsersID', 'FullName', 'Phone', 'ProvinceID', 'DistrictID', 
        'WardID', 'AddressDetail', 'ShippingFee', 'PaymentMethod', 
        'Note', 'TotalAmount', 'Status'
    ];
}