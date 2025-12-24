<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Exam;
class Student extends Model
{
    //
    protected $fillable = ["name" , "class"];

    public function Exams(){
        return $this->hasMany(Exam::class);
    }
}