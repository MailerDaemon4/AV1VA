<?php

namespace App\Models;

c
use Illuminate\Database\Eloquent\Model;

class Studio extends Model
{
    //

    protected $fillable =['name' , 'country' , 'founded'];
    public function games() {
        return $this->hasMany(Game::class);
    } 
}
