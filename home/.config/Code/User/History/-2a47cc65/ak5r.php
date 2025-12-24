<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Scare extends Model
{
    //
    protected $fillable = ['monster_id', 'description', 'scream_volume', 'date'];
    public function monster()
    {
        return $this->belongsTo(Monster::class);
    }

}
