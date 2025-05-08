<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Definir prefixo das rotas da API.
     */
    public function boot(): void
    {
        $this->configureRateLimiting();

        // Carrega `routes/api.php`
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));
    }

    /**
     * Definir limite de requisições (se necessário).
     */
    protected function configureRateLimiting(): void
    {
        //
    }
}