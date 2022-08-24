import { Task, User } from '@prisma/client';

export interface TaskResponse extends Omit<Task, 'deadline'> {
  vocals: User[];
  mixers: User[];
  drawers: User[];
  editers: User[];
  designers: User[];
  deadline: string;
}

export interface UserResponse extends User {
  tasks: Task[];
}
