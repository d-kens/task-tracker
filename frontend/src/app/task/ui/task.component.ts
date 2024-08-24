import { Component, OnInit } from '@angular/core';
import { TaskService } from '../data-access/services/task.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Task } from '../data-access/models/task.model';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'task',
  standalone: true,
  imports: [ TaskFormComponent,TaskListComponent, CommonModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent  {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

}
