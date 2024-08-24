import { Component, EventEmitter, inject, Output } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import { TaskService } from '../../data-access/services/task.service';
import { Task, NewTask } from '../../data-access/models/task.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();

  taskForm: FormGroup;

  private toast = inject(ToastrService)

  constructor(private taskService: TaskService) {
    this.taskForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      status: new FormControl('', Validators.required)
    });
  }

  addNewTask() {
    if (this.taskForm.valid) {

      const newTask: NewTask = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        status: this.taskForm.value.status,
      }

      this.taskService.addTask(newTask).subscribe({
        next: task => {
          this.toast.success('Task added successfully');
          this.addTask.emit(task)
          this.taskForm.reset();
        },
        error: err => this.toast.error('Error adding task', err)
      })

    }
  }

}
