<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Advertisement;
use App\Interfaces\IAdvertisement;
use App\Http\Controllers\Controller;
use App\Http\Resources\OfferResource;

class AdvertController extends Controller
{
    private $advertisementRepository;
    public function __construct(IAdvertisement $advertisementRepository)
    {
        $this->advertisementRepository = $advertisementRepository;
    }

    public function createAdvert(Request $request)
    {
        try {
            DB::beginTransaction();

            $result = $this->advertisementRepository->createAdvert($request);

            DB::commit();

            return response()->json(
                [
                    'responseCode' => '00',
                    'responseMessage' => 'Successfully Created',
                ],
                201
            );
        } catch (\Exception $e) {
            DB::rollback();

            return response()->json(
                [
                    'error' => $e->getMessage(),
                ],
                500
            );
        }
    }

    public function index()
    {
        try {
            $advertisements = $this->advertisementRepository->index();
            return response()->json($advertisements, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getAdvertById($id)
    {
        try {
            $advert = $this->advertisementRepository->findOrFail($id);
            return response()->json($advert, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function updateAdvert(Request $request, $id)
    {
        $advert = $this->advertisementRepository->findOrFail($id);

        try {
            DB::beginTransaction();

            $advert = $this->advertisementRepository->updateAdvert(
                $request,
                $advert
            );

            DB::commit();

            return response()->json(
                [
                    'responseCode' => '00',
                    'responseMessage' => 'Successfully Updated',
                ],
                201
            );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function deleteAdvert($id)
    {
        $advert = $this->advertisementRepository->findOrFail($id);

        try {
            DB::beginTransaction();

            $advert = $this->advertisementRepository->deleteAdvert($advert);

            DB::commit();

            return response()->json(
                [
                    'responseCode' => '00',
                    'responseMessage' => 'Successfully Deleted',
                ],
                204
            );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
