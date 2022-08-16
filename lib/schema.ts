import { Member, Task } from '@prisma/client';

export interface TaskResponse extends Task {
  members: Member[];
}

export interface MemberResponse extends Member {
  tasks: Task[];
}
