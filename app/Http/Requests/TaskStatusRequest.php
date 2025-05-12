<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskStatusRequest extends FormRequest
{
    public function rules()
    {
        return [
            'status' => 'required|in:pending,done'
        ];
    }
}
