<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\IAdvertisement;
use App\Repositories\AdvertisementRepository;
use App\Interfaces\IOffer;
use App\Repositories\OfferRepository;

class RepositoriesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
        $this->app->bind(IAdvertisement::class, AdvertisementRepository::class);
        $this->app->bind(IOffer::class, OfferRepository::class);
        $this->app->bind(IRepository::class, BaseRepository::class);
    }
}
