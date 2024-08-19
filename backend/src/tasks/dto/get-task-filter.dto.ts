import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from "../enum/task-status.enum";

export class GetTaskFiterDto {
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    searchTerm: string;
}