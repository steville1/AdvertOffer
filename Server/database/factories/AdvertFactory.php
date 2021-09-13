<?php

use Faker\Generator as Faker;
use App\Models\Advertisement;

$factory->define(App\Advertisements::class, function (Faker $faker) {
    $title = $faker->company;
    static $order = 1;
    return [
        //'id' => inRandomOrder()->first()->id,
        'title' => $title,
        'id' => $order++,
    ];
});
