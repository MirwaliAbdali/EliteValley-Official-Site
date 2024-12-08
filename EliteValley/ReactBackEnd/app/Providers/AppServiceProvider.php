<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app['router']->group([
            'prefix' => 'api',
            'middleware' => 'api',
        ], function ($router) {
            require base_path('routes/api.php');
        });
        Schema::defaultStringLength(191);
    }
}