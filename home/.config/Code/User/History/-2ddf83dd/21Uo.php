<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/students' , [StudentController::class , "index"]);

Route::Post('/students' , [StudentController::class , "store"]);

Route::get('/exam' , [ExamController::claass , "index"]);
Route::post('/exam' , [ExamController::claass , "store"]);
Route::delete('/exam' , [ExamController::claass , "index"]);