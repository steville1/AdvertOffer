<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Interfaces\IOffer;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    private $offerRepository;
    public function __construct(IOffer $offerRepository)
    {
        $this->offerRepository = $offerRepository;
    }
    public function createOffer(Request $request)
    {
        try {
            DB::beginTransaction();

            $result = $this->offerRepository->createOffer($request);

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
            $offers = $this->offerRepository->index();
            return response()->json($offers, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getOfferById($id)
    {
        try {
            $offer = $this->offerRepository->findOrFail($id);
            return response()->json($offer, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function updateOffer(Request $request, $id)
    {
        $offer = $this->offerRepository->findOrFail($id);

        try {
            DB::beginTransaction();

            $offer = $this->offerRepository->updateOffer($request, $offer);

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

    public function deleteOffer($id)
    {
        $offer = $this->offerRepository->findOrFail($id);

        try {
            DB::beginTransaction();

            $offer = $this->offerRepository->deleteOffer($offer);

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
