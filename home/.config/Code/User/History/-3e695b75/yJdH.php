<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/users/login', [App\Http\Controllers\UsersController::class, 'LogIn']);
Route::get('/users/index', [App\Http\Controllers\UsersController::class, 'shoIndexw']);
