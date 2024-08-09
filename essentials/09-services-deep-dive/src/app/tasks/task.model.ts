export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

//{}[] - array of objects
export const TaskStatusOptions: {
  taskStatus: TaskStatus;
  value: 'open' | 'in-progress' | 'done';
  text: string;
}[] = [
  { taskStatus: 'OPEN', value: 'open', text: 'Open' },
  { taskStatus: 'IN_PROGRESS', value: 'in-progress', text: 'In-Progress' },
  { taskStatus: 'DONE', value: 'done', text: 'Completed' },
];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
