<?php

namespace App\Providers;

use App\Services\TaskService;
use Illuminate\Support\ServiceProvider;

class TaskServiceProvider extends ServiceProvider {
    public function register() {
        $this->app->singleton(TaskService::class, function ($app) {
            return new TaskService();
        });
    }
}