<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'Users';
    protected $primaryKey = 'UsersId';
    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = [
        'UsersId',
        'UsersName',
        'Email',
        'Phone',
        'Gender',
        'PasswordHash',
        'CreatedAt'
    ];

    protected $hidden = [
        'PasswordHash'
    ];

   
    public function getAuthPassword()
    {
        return $this->PasswordHash;
    }
}
