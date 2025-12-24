<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = ['studio_id', 'title', 'genre', 'release_year'];

    public function studio()
    {
        return $this->belongsTo(Studio::class);
    }
}
