import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFiterDto } from './dto/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
import { TaskStatus } from './enum/task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  async getTasks(filterDto: GetTaskFiterDto): Promise<Task[]> {
    const { status, searchTerm } = filterDto;
    const query = this.taskRepository.createQueryBuilder('task');

    // filterby status
    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    // filter by searchTerm
    if (searchTerm) {
      query.andWhere(
        '(task.title LIKE :searchTerm OR task.description LIKE :searchTerm)',
        { searchTerm: `%${searchTerm}%` },
      );
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async getTaskById(id: number): Promise<Task> {
    const foundTask = await this.taskRepository.findOne({ where: { id } });

    if (!foundTask) {
      throw new NotFoundException(`Task with id: ${id} not found`);
    }

    return foundTask;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, status } = createTaskDto;

    console.log(status);

    const task = new Task();

    task.title = title;
    task.description = description;
    task.status = status;

    await task.save();

    console.log(task);

    return task;
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);

    task.status = status;
    await task.save();
    return task;
  }

  async delete(id: number): Promise<{ message: string }> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID: ${id} not found`);
    }

    return { message: 'Task deleted succesfully' };
  }
}
