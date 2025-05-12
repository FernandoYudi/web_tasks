<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::middleware('api')->group(function () {
    Route::get('/tasks', [TaskController::class, 'index']);
    Route::get('/tasks/{id}', [TaskController::class, 'show']);
    Route::post('/tasks', [TaskController::class, 'store']);
    Route::put('/tasks/{task}', [TaskController::class, 'update']); // Para edição completa
    Route::patch('/tasks/{task}/status', [TaskController::class, 'updateStatus']); // Para alternar estado
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);
});