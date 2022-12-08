import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Task } from '../types/task.type';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent {
  @Input() task: Task;

  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();

  removeTask(): void {
    this.remove.emit(this.task.id);
  }

  editTask(): void {
    this.edit.emit(this.task.id);
  }

  complete(checked: boolean): void {
    this.task.completed = checked;
  }
}
