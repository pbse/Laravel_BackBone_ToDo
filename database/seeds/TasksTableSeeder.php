<?php

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert(['tasks' => 'Get Up early']);
        DB::table('tasks')->insert(['tasks' => 'Sleep early']);
    }
}
