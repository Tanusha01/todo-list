import { Component } from '@angular/core';
import { Task } from '../types/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList:Task []=[];
  public newTask:string;
private lastId:number = 0;

  addTask():void{
    if(this.newTask){
      this.taskList.push({title:this.newTask, id: ++this.lastId, completed:false});
      this.newTask = '';
    }
  }
removeTask(taskId:number):void{
  const taskIndex = this.taskList.findIndex(task => task.id === taskId);
this.taskList.splice(taskIndex, 1)
}
}
