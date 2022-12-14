import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Task } from '../types/task.type';
import { titleValidator } from './task-form-dialog/titleValidator';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss'],
  providers: [TaskService]
})
export class TaskFormDialogComponent implements OnInit, OnDestroy {
  public taskForm = this.fb.group({
    title: new FormControl<string>(null, [
      Validators.required,
      titleValidator(/[A-Z]{1}[a-z]{2,30}/mg)]),
    description: new FormControl<string>(null, [Validators.maxLength(50)]),
    assignee: new FormControl<string>(null, [Validators.required]),
    isUrgent: new FormControl<boolean>(null),
  });

  constructor(
    public dialogRef: MatDialogRef<TaskFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task, users: string[] },
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.data.task) {
      this.setFormValue();
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.taskForm.value);
  }

  private setFormValue(): void {
    this.taskForm.setValue({
      title: this.data.task.title,
      description: this.data.task.description || null,
      isUrgent: this.data.task.isUrgent,
      assignee: this.data.task.assignee
    });
  }

  ngOnDestroy(): void {
    //debugger
  }
}
