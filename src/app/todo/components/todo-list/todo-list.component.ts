import { Component, HostListener, OnInit } from '@angular/core';
import { Task } from "../../types/task.type";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormControl, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { TaskFormDialogComponent } from "../task-form-dialog/task-form-dialog.component";
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TaskService]
})
export class TodoListComponent implements OnInit {
  public taskList: Task[];
  public newTask: string;
  public editing: boolean;

  private lastId: number = 0;
  private editedTaskId: number;
  private users: string[];

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskList = tasks;
    });
    this.taskService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

 // @HostListener('window:keyup.enter')
  showNotification(): void {
    this._snackBar.open('Task has been created', '', {
      duration: 3 * 1000,
    });
  }

  addTask(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute.parent });
    /*const dialogRef = this.dialog.open(TaskFormDialogComponent, {
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
    });*/
  }

  removeTask(taskId: number): void {
    const taskIndex = this.taskList.findIndex(task => task.id === taskId);
    this.taskList.splice(taskIndex, 1);
  }

  editTask(taskId: number): void {
    this.router.navigate([taskId], { relativeTo: this.activatedRoute.parent });

    /*let task = this.taskList.find(task => task.id === taskId);
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
    });*/
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
