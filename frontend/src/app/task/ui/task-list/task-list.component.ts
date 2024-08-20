import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { Task } from '../../data-access/models/task.model';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [
    CommonModule,
    TaskListItemComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tasks: Task[] = [];

}
