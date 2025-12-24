<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studio extends Model
{
   use HasFactory;
    //

    protected $fillable =['name' , 'country' , 'founded'];
    public function games() {
        return $this->hasMany(Game::class);
    } 
}
