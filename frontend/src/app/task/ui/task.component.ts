import { Component } from '@angular/core';
import { TaskService } from '../data-access/services/task.service';
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




  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data : any) => {
        this.tasks = data
      },
      (error: any) => {
        alert(error.message)
      }
    );
  }

  onTaskAdded(newTask: Task) {
    this.tasks.push(newTask)
  }

  onTaskDeleted(deletedTask: Task) {
    console.log(deletedTask)
    this.tasks = this.tasks.filter(task => task.id !== deletedTask.id)
  }

}
