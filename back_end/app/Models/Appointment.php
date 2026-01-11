<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table = 'Appointments';
    protected $primaryKey = 'AppointmentID';
    public $timestamps = false;

    protected $fillable = [
        'UsersID',
        'EmployeeID',
        'ServiceID',
        'FacilitiesID',
        'AppointmentTime',
        'PaymentID',
        'Status'
    ];
}
