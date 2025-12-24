<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    protected $fillable = ["name" , "class"];

    public function exams(){
        return $this->hasMany(Exam::class);
    }
}