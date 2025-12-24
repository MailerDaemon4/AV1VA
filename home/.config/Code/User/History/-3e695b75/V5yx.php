<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/users', [App\Http\Controllers\UsersController::class, 'Index'])->middleware('auth:sanctum');

Route::post('/users/login', [App\Http\Controllers\UsersController::class, 'LogIn']);

