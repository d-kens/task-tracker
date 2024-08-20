import { Component, OnInit } from '@angular/core';
import { TaskService } from '../data-access/services/task.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { Task } from '../data-access/models/task.model';

@Component({
  selector: 'task',
  standalone: true,
  imports:  [
    CommonModule,
    RouterLink,
    RouterOutlet,
    TaskListComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any) => {
        this.tasks = data
      },

      (error: any) => {
        alert(error.message)
      }
    )
  }

}
