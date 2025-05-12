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

    public function updateTask(Task $task, array $data)
    {
        $task->update($data);
        return $task->fresh();
    }

    public function toggleTaskStatus(Task $task, array $data)
    {
        $task->update(['status' => $data['status']]);
        return $task->fresh();
    }

    public function deleteTask(Task $task) {
        $task->delete();
    }
}
