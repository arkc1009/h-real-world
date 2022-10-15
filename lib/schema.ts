import { Task, User } from '@prisma/client';

export interface TaskResponse
  extends Omit<
    Task,
    | 'deadline'
    | 'deadlineRecode'
    | 'deadlineMix'
    | 'deadlineDraw'
    | 'deadlineMovie'
    | 'deadlineDesign'
    | 'deadlineFinal'
  > {
  vocals: User[];
  mixers: User[];
  drawers: User[];
  editers: User[];
  designers: User[];
  deadline: string;
  deadlineRecode: string;
  deadlineMix: string;
  deadlineDraw: string;
  deadlineMovie: string;
  deadlineDesign: string;
  deadlineFinal: string;
}

export interface UserResponse extends User {
  tasks: Task[];
}
