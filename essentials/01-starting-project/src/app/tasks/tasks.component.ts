import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  @Input({required: true}) userId?: string;
  @Input({required: true}) name?: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Complete Design Sprint',
      summary: 'Finalize the UI/UX designs for the upcoming project sprint.',
      dueDate: '2023-04-10',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Update Documentation',
      summary: 'Ensure all project documentation is up to date with the latest changes.',
      dueDate: '2023-04-15',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Code Review',
      summary: 'Perform a code review for the recent submissions by the development team.',
      dueDate: '2023-04-20',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Deploy to Staging',
      summary: 'Deploy the latest build to the staging environment for testing.',
      dueDate: '2023-04-25',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Client Feedback Meeting',
      summary: 'Meet with the client to gather feedback on the current project phase.',
      dueDate: '2023-04-30',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Prepare Release',
      summary: 'Prepare the final release of the software, ensuring all features are polished.',
      dueDate: '2023-05-05',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    console.log(`Task ${id} was completed`);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
