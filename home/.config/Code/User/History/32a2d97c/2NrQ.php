<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    //

    protected $fillable = ["student_name" , "classroom" , "subject" , "date"];

    public function student(){
        return $this-> hasOne(Student::class);
    }
}
