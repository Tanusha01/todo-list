import { NgModule } from "@angular/core";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoTaskComponent } from "./components/todo-task/todo-task.component";
import { TaskFormDialogComponent } from "./components/task-form-dialog/task-form-dialog.component";
import { TodoProgressComponent } from "./components/todo-progress/todo-progress.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule } from "@angular/material/core";
import { TodoRoutingModule } from "./todo-routing.module";
import { CommonModule } from "@angular/common";
import { TooltipDirective } from "./directives/tooltip.directive";
import { TodoTaskDetailsComponent } from './components/todo-task-details/todo-task-details.component';
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [
    TodoListComponent,
    TodoTaskComponent,
    TaskFormDialogComponent,
    TodoProgressComponent,
    TooltipDirective,
    TodoTaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatExpansionModule
  ],
  exports: [],
  providers: [],
})
export class TodoModule {}
