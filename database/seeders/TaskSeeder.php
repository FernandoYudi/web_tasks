<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    public function run()
    {
        Task::create(['title' => 'Aprender Laravel', 'description' => 'Ver documentação e criar projeto', 'status' => 'pending']);
        Task::create(['title' => 'Estudar Vue.js', 'description' => 'Criar um CRUD', 'status' => 'done']);
        Task::create(['title' => 'Estruturando Crud', 'description' => 'Controller', 'status' => 'done']);
        Task::create(['title' => 'Trabalhando Requests', 'description' => 'Error Validation', 'status' => 'done']);
        Task::create(['title' => 'Criando Model de padronização', 'description' => 'Campo nullable', 'status' => 'pending']);
    }
}

