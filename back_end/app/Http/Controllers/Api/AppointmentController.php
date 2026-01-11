<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $appointment = Appointment::create([
            'UsersID'         => $request->users_id,
            'EmployeeID'      => $request->employee_id,
            'FacilitiesID'    => $request->facilities_id,
            'ServiceID'       => $request->service_id,
            'AppointmentTime' => $request->appointment_time,
            'Status'          => 'pending'
        ]);

        return response()->json([
            'message' => 'Đặt lịch thành công',
            'data' => $appointment
        ], 201);
    }
}

