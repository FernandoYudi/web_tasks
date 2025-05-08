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
    }
}

