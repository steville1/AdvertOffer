<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

interface IAdvertisement
{
    public function createAdvert(Request $request);
    public function index();
    public function updateAdvert(Request $request, $advert);
    public function deleteAdvert($advert);
}

?>
