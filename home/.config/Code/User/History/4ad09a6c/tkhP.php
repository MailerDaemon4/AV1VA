<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    //
    protected $fillable = ['reverwer_name', 'comment', 'rating', 'game_id'];

    public function game()
    {
        return $this->belongsTo(Game::class);

    }
}
