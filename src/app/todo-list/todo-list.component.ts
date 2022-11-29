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
  public editing:boolean;
private lastId:number = 0;
private editedTskId:number;

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
editTask(taskId:number):void{
  this.editedTskId = taskId;
  this.editing = true;
  this.newTask = this.taskList.find(task => task.id === taskId).title;
}
saveChanges():void{
  this.taskList.find(task => task.id === this.editedTskId).title = this.newTask;
  this.cancel();
}
cancel():void{
this.editing = false;
this.newTask = '';
this.editedTskId = null;
}
}
