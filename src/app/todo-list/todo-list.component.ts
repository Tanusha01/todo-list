import { Component, HostListener } from '@angular/core';
import { Task } from "../types/task.type";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { TaskFormDialogComponent } from "../task-form-dialog/task-form-dialog.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Task[] = [{
    id: 0,
    title: 'Task',
    description: 'Descr',
    assignee: 'John',
    isUrgent: false,
    completed: false
  }];
  public newTask: string;
  public editing: boolean;

  private lastId: number = 0;
  private editedTaskId: number;
  private users: string[] = ["John", "Alex", 'Bob'];

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) {
  }

 // @HostListener('window:keyup.enter')
  showNotification(): void {
    this._snackBar.open('Task has been created', '', {
      duration: 3 * 1000,
    });
  }

  addTask(): void {
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '600px',
      data: { users: this.users },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskList.push({
          ...result,
          id: ++this.lastId,
          completed: false
        });
      }
    });
  }

  removeTask(taskId: number): void {
    const taskIndex = this.taskList.findIndex(task => task.id === taskId);
    this.taskList.splice(taskIndex, 1);
  }

  editTask(taskId: number): void {
    let task = this.taskList.find(task => task.id === taskId);
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '600px',
      data: { task, users: this.users },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const taskInd = this.taskList.findIndex(task => task.id === taskId);
        this.taskList.splice(taskInd, 1);
        this.taskList.push({
          ...task,
          ...result,
        });
      }
    });
  }

  saveChanges(): void {
    this.taskList.find(task => task.id === this.editedTaskId).title = this.newTask;
    this.cancel();
  }

  cancel(): void {
    this.editing = false;
    this.newTask = '';
    this.editedTaskId = null;
  }
}
