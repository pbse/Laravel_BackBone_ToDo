<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Task;

class TodoController extends Controller
{
	public function index(Request $request) {
    	return Task::all();
  	}

  	public function store(Request $request) {
		$task = new Task;
		$task->tasks = $request['tasks'];
		$task->save();
		return $task;
	}

	public function edit(Request $request, $id) {
		$task = Task::findOrFail($id);
		return $task;
	}

	public function update(Request $request, $id) {
		$task = Task::findOrFail($id);
		$task->tasks = $request['tasks'];
		$task->save();
		return $task;
	}

	public function destroy(Request $request, $id) {
		$task = Task::findOrFail($id)->delete();
		//return $task;
	}
}
