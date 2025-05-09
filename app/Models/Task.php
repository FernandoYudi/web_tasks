<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model {
    protected $fillable = ['title', 'description', 'status']; 

    protected $attributes = [
        'status' => 'pending', // Valor padrão para evitar `null`
    ];
}