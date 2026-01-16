<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function register(Request $request)
{
    $request->validate([
        'UsersName' => 'required',
        'Email' => 'required|email|unique:Users,Email',
        'Password' => 'required|min:6'
    ]);

    $user = User::create([
        'UsersId' => now()->timestamp, // AUTO ID
        'UsersName' => $request->UsersName,
        'Email' => $request->Email,
        'Phone' => $request->Phone,
        'Gender' => $request->Gender,
        'PasswordHash' => Hash::make($request->Password),
        'CreatedAt' => now()
    ]);

    // TẠO TOKEN (JWT)
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Register & login success',
        'token' => $token,
        'user' => $user
    ], 201);
}


    public function login(Request $request)
{
    $request->validate([
        'Email' => 'required|email',
        'Password' => 'required'
    ]);

    $user = User::where('Email', $request->Email)->first();

    if (!$user || !Hash::check($request->Password, $user->PasswordHash)) {
        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Login success',
        'token' => $token,
        'user' => $user
    ]);
}
public function logout(Request $request)
{
    $request->user()->currentAccessToken()->delete();

    return response()->json([
        'message' => 'Logout success'
    ]);
}

}
