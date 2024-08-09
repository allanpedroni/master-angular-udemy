import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export type TaskStatusOptions = {
  taskStatus: TaskStatus;
  value: 'open' | 'in-progress' | 'done';
  text: string;
};

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions[]>('task-status-options');

//{}[] - array of objects
export const TaskStatusOptions: TaskStatusOptions[] = [
  { taskStatus: 'OPEN', value: 'open', text: 'Open' },
  { taskStatus: 'IN_PROGRESS', value: 'in-progress', text: 'In-Progress' },
  { taskStatus: 'DONE', value: 'done', text: 'Completed' },
];

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
