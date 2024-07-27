<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

Route::post('/register', function (Request $request) {
    $request->validate([
        'name' => 'string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:3',
    ]);

    $user = User::create([
        'name' => "",
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response(['code' => 400, 'message' => 'Failed to create account'], 400);
    }
    $token = $user->createToken($request->device_name)->plainTextToken;

    $cookie = cookie('token', $token, 60 * 24); // 1 day expiration

    return response(['code' => 200, 'message' => 'User registered successfully', 'token' => $token], 200)->withCookie($cookie);
});

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response(['code' => 400, 'message' => 'The provided credentials are incorrect.'], 400);
    }

    //$user->tokens()->delete();
     $user->tokens()->delete();
    $token = $user->createToken($request->device_name)->plainTextToken;

    $cookie = cookie('token', $token, 60 * 24); // 1 day expiration

    return response(['code' => 200, 'message' => 'Login successful', 'token' => $token], 200)->withCookie($cookie);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->tokens()->delete();
    $cookie = cookie('token', '', -1); // Delete the cookie

    return response(['message' => 'Logged out successfully'])->withCookie($cookie);
});
