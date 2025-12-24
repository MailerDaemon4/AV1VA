<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    //
    protected $fillable = ['title', 'author'];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
