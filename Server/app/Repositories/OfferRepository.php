<?php

namespace App\Repositories;
use Illuminate\Http\Request;
use App\Models\Offer;
use App\Interfaces\IOffer;

class OfferRepository extends BaseRepository implements IOffer
{
    public function __construct()
    {
        parent::__construct('Offers');
    }
    public function createOffer(Request $request)
    {
        $validatedData = $request->validate([
            'product_name' => ['required', 'max:100'],
            'discount_rate' => ['required'],
            'advertisement_id' => ['required'],
        ]);
        return Offer::create([
            'product_name' => $request->product_name,
            'discount_rate' => $request->discount_rate,
            'advertisement_id' => $request->advertisement_id,
        ]);
    }
    public function index()
    {
        $Offers = Offer::all();
        return $Offers;
    }

    public function updateOffer(Request $request, $offer)
    {
        $offer->update([
            'product_name' => $request->product_name,
            'discount_rate' => $request->discount_rate,
            'advertisement_id' => $request->advertisement_id,
        ]);
        return $offer;
    }
    public function deleteOffer($offer)
    {
        $advert->delete();
    }
}

?>
