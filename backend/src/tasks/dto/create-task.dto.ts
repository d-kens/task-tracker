import { IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../enum/task-status.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: TaskStatus;
}
