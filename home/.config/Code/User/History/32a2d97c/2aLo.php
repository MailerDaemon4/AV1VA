<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    //

    protected $fillable = ["student_name" , "classroom" , "subject" , "date"];

    public function Sudent(){
        return $this-> hasOne(Student::class);
    }
}
