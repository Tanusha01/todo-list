import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../types/task.type';
//import { tasks } from "./mockData";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(tasks);
  }

  getUsers(): Observable<string[]> {
    return of(users);
  }

  getTask(id: number): Promise<Task> {
    const task = tasks.find(task => task.id === id);
    const taskPromise = new Promise<Task>((resolve, reject) => {
      if (task) {
        resolve(task);
      } else {
        reject();
      }
    });
    return taskPromise;
  }

  editTask(): Promise<void> {
    console.log('edit');
    return Promise.resolve();
  }

  createTask(): Promise<void> {
    console.log('create');
    return Promise.resolve();
  }

  deleteTask(): Promise<void> {
    console.log('delete');
    return Promise.resolve();
  }
}

const tasks: Task[] = [
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
const users: string[] = ["John", "Alex", 'Bob']
