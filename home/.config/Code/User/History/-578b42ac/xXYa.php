<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\models\Studio;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Game>
 */
class GameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //

            'title' => fake()->word(2),
            'genre'=>fake()->randomElement(['Sci-FI' , 'fps' , 'Horror' , 'Puzzle' , 'Open-world']),
            'release_year' =>fake()->date(),
            'studio_id' => Studio::factory()
        ];
    }
}
