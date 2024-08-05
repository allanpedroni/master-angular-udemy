import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      title: taskData.title,
      description: taskData.description,
      id: Math.random().toString(),
      status: 'OPEN'
    };

    this.tasks.update(oldTasks => [...oldTasks, newTask]);
  }


}
