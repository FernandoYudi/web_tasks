<?php
namespace App\Http\Controllers;

use App\Services\TaskService;
use App\Models\Task;
use App\Http\Requests\TaskRequest;
use App\Http\Requests\TaskStatusRequest;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function __construct(private TaskService $taskService) {}

    public function index(Request $request)
    {
        return response()->json(
            $this->taskService->getTasks($request->status)
        );
    }
    
    public function show($id)
    {
        try {
            $task = Task::findOrFail($id);
            return response()->json($task);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Tarefa não encontrada'], 404);
        }
    }
    public function store(TaskRequest $request)
    {
        return response()->json(
            $this->taskService->createTask($request->validated()),
            201
        );
    }

    public function update(TaskRequest $request, Task $task)
    {
        try {
            $task->update($request->validated());
            return response()->json($task);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function updateStatus(TaskStatusRequest $request, Task $task)
    {
        return response()->json(
            $this->taskService->toggleTaskStatus($task, $request->validated())
        );
    }

    public function destroy(Task $task)
    {
        $this->taskService->deleteTask($task);
        return response()->json(null, 204);
    }
}
