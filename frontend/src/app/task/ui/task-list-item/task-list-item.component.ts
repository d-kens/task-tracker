import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../data-access/models/task.model';

@Component({
  selector: 'task-list-item',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {

  @Input() task!: Task;


}
