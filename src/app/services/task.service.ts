import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
// import { tasks } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Promise<Task[]>{
    const tasksPromise = new Promise<Task[]>((resolve,reject)=> {
      resolve(tasks);
    });
    return tasksPromise;
  }

  getUsers():Promise<string[]>{
    const usersPromise = new Promise<string[]>((resolve,reject)=> {
      resolve(users);
    });
    return usersPromise;
  }
}
const tasks :Task[]=[{
  id: 0,
  title: 'Task',
  description: 'Descr',
  assignee: 'John',
  isUrgent: false,
  completed: false
},

{
  id: 1,
  title: 'Task 1',
  description: '',
  assignee: 'Bob',
  isUrgent: true,
  completed: false
},

{
  id: 2,
  title: 'Task 2',
  description: '',
  assignee: 'Alex',
  isUrgent: true,
  completed: false
}
];



const users: string[] = ["John", "Alex", 'Bob'];
