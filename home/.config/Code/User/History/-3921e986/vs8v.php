<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Phone;

class Person extends Model
{
    protected $fillable = ['name'];

    public function phone()  
    {
        return $this->
        hasOne(Phone::class);
        hasmany(Phone::class);
    }
}
