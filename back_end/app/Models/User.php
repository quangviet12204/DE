<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'Users';
    protected $primaryKey = 'UsersId';

    const CREATED_AT = 'CreatedAt';
    const UPDATED_AT = null;

    protected $fillable = [
        'UsersName',
        'Email',
        'Password',
        'RoleID'
    ];

    protected $hidden = [
        'Password'
    ];

    // ✅ RELATION PHẢI NẰM TRONG CLASS
    public function role()
    {
        return $this->belongsTo(Role::class, 'RoleID', 'RoleID');
    }
}
