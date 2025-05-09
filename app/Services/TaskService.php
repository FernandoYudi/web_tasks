<?php

namespace App\Services;

use App\Models\Task;

class TaskService {
    public function getTasks($status = null) {
        return Task::when($status, fn($query) => $query->where('status', $status))->get();
    }

    public function createTask($data) {
        return Task::create($data);
    }

    public function updateTask(Task $task, $data) {
        $validatedData = validator($data, [
            'title' => 'required|string|max:255',
            'status' => 'required|in:pending,done',
        ])->validate();
    
        $task->update($validatedData);
        return $task;
    }

    public function deleteTask(Task $task) {
        $task->delete();
    }
}
