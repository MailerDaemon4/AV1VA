<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Musician extends Model
{
    //

    protected $fillable = ['name', 'type'];

    
    public function instruments()
    {
        return $this->belongsToMany(Instrument::class, 'instrument_mucician')
                    ->withPivot('proficiency', 'years_played')
                    ->withTimestamps();
    }

}
