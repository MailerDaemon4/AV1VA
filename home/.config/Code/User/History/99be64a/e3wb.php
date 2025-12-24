<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instrument extends Model
{
    //

    protected $fillable = ['name', 'family'];   

    public function musicians()
    {
        return $this->belongsToMany(Musician::class, 'instrument_mucician')
        ->withPivot(['proficiency', 'years_played'])
        ->withTimestamps();
    }
}
