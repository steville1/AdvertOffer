<?php

namespace Tests\Feature\Http\Controllers\Api;
//use Tests\Feature\Http\Controllers\Api\ReflectionClass;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Faker\Factory;
use Tests\TestCase;

class AdvertControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    use RefreshDatabase;

    /**
     * @test
     */
    public function can_create_an_advert()
    {
        $this->withoutExceptionHandling();
        $faker = Factory::create();
        $response = $this->json('POST', '/api/createAdvertisement', [
            'title' => ($title = $faker->company),
        ]);
        $response
            ->assertJsonStructure(['responseCode', 'responseMessage'])
            ->assertJson([
                'responseCode' => '00',
            ])
            ->assertStatus(201);

        $this->assertDatabaseHas('Advertisements', [
            'title' => $title,
        ]);
    }

    /** @test */
    public function will_fail_with_a_404_if_advert_we_want_to_update_is_not_found()
    {
        $response = $this->json('PUT', 'api/updateAdvert/-1', [
            'title' => 'test',
        ]);

        $response->assertStatus(404);
    }
}
