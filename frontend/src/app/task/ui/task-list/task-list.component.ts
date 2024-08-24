import { Component } from '@angular/core';
import { Task } from '../../data-access/models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: Task[] = [
    {
      id: 1,
      title: "Example Task",
      description: "This is an exmaple task description",
      status: 'OPEN'
    },
    {
      id: 2,
      title: "Example Task",
      description: "This is an exmaple task description",
      status: 'DONE'
    },
    {
      id: 3,
      title: "Example Task",
      description: "This is an exmaple task description",
      status: 'IN_PROGRESS'
    }
  ]


}
