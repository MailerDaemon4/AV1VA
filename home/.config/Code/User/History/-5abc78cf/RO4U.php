<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    //
    protected $fillable = ['name', 'bed_owner_name', 'fear_level'];

    public function scares()
    {
        return $this->hasMany(Scare::class);
    }
}
