<?php

namespace App\Http\Controllers;

use App\Services\TaskService;
use App\Models\Task;
use App\Http\Requests\TaskRequest;
use Illuminate\Http\Request;

class TaskController extends Controller {
    public function __construct(private TaskService $taskService) {}

    public function index(Request $request) {
        return response()->json($this->taskService->getTasks($request->status));
    }
    
    public function store(TaskRequest $request) {
        return response()->json($this->taskService->createTask($request->validated()), 201);
    }

    public function update(TaskRequest $request, Task $task) {
        return response()->json($this->taskService->updateTask($task, $request->validated()));
    }

    public function destroy(Task $task) {
        $this->taskService->deleteTask($task);
        return response()->json(null, 204);
    }
    
}
