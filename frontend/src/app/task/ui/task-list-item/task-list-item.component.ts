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

  @Output() delete = new EventEmitter<number>();


  showDescription = false;

  toggleDescription() {
    this.showDescription = !this.showDescription;
    console.log('Task clicked:', this.task);
  }

  getStatusClass() {
    switch (this.task.status.toLowerCase()) {
      case 'open':
        return 'open-status';
      case 'in_progress':
        return 'in-progress-status';
      case 'done':
        return 'done-status';
      default:
        return '';
    }
  }

  deleteTask(event: MouseEvent) {
    event.stopPropagation(); // Prevent triggering the click event for toggleDescription
    this.delete.emit(this.task.id);
  }

}
