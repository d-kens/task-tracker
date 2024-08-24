import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../../data-access/models/task.model';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../data-access/services/task.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'task-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Output() taskDeleted = new EventEmitter<Task>();
  @Input() tasks: Task[] = [];

  private toastService = inject(ToastrService);
  private taskService = inject(TaskService);



  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe({
      next: message => {
        this.toastService.success('Task deleted succesfully');
        this.taskDeleted.emit(task)
      },
      error: err => this.toastService.error('Error deleting task', err)
    })
  }


}
