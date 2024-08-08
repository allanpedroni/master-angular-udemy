import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';
import { LoggingService } from './app/logging.service';

export const TaskServiceToken = new InjectionToken<TasksService>('tasks-service-token');

bootstrapApplication(AppComponent, {
  providers: [{provide: TaskServiceToken, useClass: TasksService}],
  //providers: []
  //imports: [],
  //declarations: [],
  //bootstrap: []
}).catch((err) => console.error(err));
