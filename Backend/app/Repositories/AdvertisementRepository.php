<?php

namespace App\Repositories;
use Illuminate\Http\Request;
use App\Models\Advertisement;
use App\Common\Advertisements;
use App\Interfaces\IAdvertisement;
use App\Repositories\BaseRepository;

class AdvertisementRepository extends BaseRepository implements IAdvertisement
{
    public function __construct()
    {
        parent::__construct('Advertisements');
    }
    public function createAdvert(Request $request)
    {
        return Advertisement::create([
            'title' => $request->title,
        ]);
    }
    public function index()
    {
        $advertisements = Advertisement::all();
        return $advertisements;
    }

    public function updateAdvert(Request $request, $advert)
    {
        $advert->update([
            'title' => $request->title,
        ]);
        return $advert;
    }
    public function deleteAdvert($advert)
    {
        $advert->delete();
    }
}

?>
