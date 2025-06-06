<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest { //Request para validação de campos de tasks.
    public function authorize() {
        return true;
    }

    public function rules() {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|in:pending,done',
        ];
    }
}

