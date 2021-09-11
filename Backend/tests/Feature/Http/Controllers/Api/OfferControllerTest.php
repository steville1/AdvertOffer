<?php

namespace Tests\Feature\Http\Controllers\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Faker\Factory;

class OfferControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
    
     * @return void
     */
    /** @test */
    public function can_create_an_offer()
    {
        $this->withoutExceptionHandling();
        $faker = Factory::create();
        $response = $this->json('POST', '/api/createOffer', [
            'product_name' => ($product_name = $faker->company),
            'discount_rate' => 20,
            'advertisement_id' => 2,
        ]);
        $response
            ->assertJsonStructure(['responseCode', 'responseMessage'])
            ->assertJson([
                'responseCode' => '00',
            ])
            ->assertStatus(201);

        $this->assertDatabaseHas('offers', [
            'product_name' => $product_name,
            'discount_rate' => 20,
            'advertisement_id' => 2,
        ]);
    }
    /** @test */
    public function will_fail_with_a_404_if_Offer_we_want_to_update_is_not_found()
    {
        $response = $this->json('PUT', 'api/updateOffer/-1', [
            'product_name' => 'test',
        ]);

        $response->assertStatus(404);
    }
}
