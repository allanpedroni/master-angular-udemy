import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  //all the components that are used in this component like NewTaskComponent and TasksListComponent will have access to the TasksService
  //providers: [TasksService],
})
export class TasksComponent { }
