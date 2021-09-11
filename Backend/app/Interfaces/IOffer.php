<?php

namespace App\Interfaces;
use Illuminate\Http\Request;

interface IOffer
{
    public function createOffer(Request $request);
    public function index();
    public function updateOffer(Request $request, $offer);
    public function deleteOffer($offer);
}

?>
