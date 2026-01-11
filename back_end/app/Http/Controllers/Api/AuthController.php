<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

public function login(Request $request)
{
    $request->validate([
        'email'    => 'required|email',
        'password' => 'required'
    ]);

    $user = User::with('role')
        ->where('Email', $request->email)
        ->first();

    if (!$user || !Hash::check($request->password, $user->Password)) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'token' => $token,
        'user'  => [
            'id'    => $user->UsersId,
            'name'  => $user->UsersName,
            'email' => $user->Email,
            'role'  => $user->role->Role
        ]
    ]);
}
