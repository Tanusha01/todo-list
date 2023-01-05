import { Task } from "../types/task.type";

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Task',
    description: 'Descr',
    assignee: 'John',
    isUrgent: false,
    completed: false
  },
  {
    id: 2,
    title: 'Task 1',
    description: '',
    assignee: 'Bob',
    isUrgent: true,
    completed: false
  },
  {
    id: 3,
    title: 'Task 2',
    description: '',
    assignee: 'Alex',
    isUrgent: true,
    completed: false
  }
];
