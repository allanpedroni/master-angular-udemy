import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required: true}) userId?: string;
  @Input({required: true}) name?: string;
  isAddingTask= false;

  get selectedUserTasks() {
    return
  }

  onCompleteTask(id: string) {
    console.log(`Task ${id} was completed`);
  }

  onStartAddTask() {
    console.log('Add Task button clicked');
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    console.log('Cancel Add Task button clicked');
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    console.log('Task added:', taskData);

    this.isAddingTask = false;
  }
}
