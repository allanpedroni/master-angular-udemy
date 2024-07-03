import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [DatePipe, CardComponent]
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(private tasksService: TasksService) {}

  onCompleteTask(id: string) {
    console.log(`Task ${id} was completed`);
    this.tasksService.removeTask(id);
  }
}
