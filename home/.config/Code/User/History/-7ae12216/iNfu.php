<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Studio extends Model
{
    //

    protected $fillable =['name' , 'country' , 'founded'];
    public function games() 
}
