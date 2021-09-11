<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Advertisement;
use App\Http\Controllers\Api\AdvertController;
use App\Http\Controllers\Api\OfferController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
//Adverts
//Route::post('/posts', [AdvertController::class, 'createAdvert']);
Route::get('/advertisements', [AdvertController::class, 'index']);
Route::post('/createAdvertisement', [AdvertController::class, 'createAdvert']);
Route::get('/getAdvertById/{id}', [AdvertController::class, 'getAdvertById']);
Route::put('/updateAdvert/{id}', [AdvertController::class, 'updateAdvert']);
Route::delete('/deleteAdvert/{id}', [AdvertController::class, 'deleteAdvert']);

//Offers
Route::get('/offers', [OfferController::class, 'index']);
Route::post('/createOffer', [OfferController::class, 'createOffer']);
Route::get('/getOfferById/{id}', [OfferController::class, 'getOfferById']);
Route::put('/updateOffer/{id}', [OfferController::class, 'updateOffer']);
Route::delete('/deleteOffer/{id}', [OfferController::class, 'deleteOffer']);
