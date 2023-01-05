import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoTaskDetailsComponent } from "./components/todo-task-details/todo-task-details.component";

// localhost:4200/todo/
const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {// todo/tasks/
    path: 'tasks',
    data: {
      breadcrumb: 'Tasks'
    },
    children: [
      {//todo/tasks
        path: '',
        component: TodoListComponent,
      },
      {//todo/tasks/new
        path: 'new',
        component: TodoTaskDetailsComponent,
        data: {
          breadcrumb: 'Create new task'
        }
      },
      {//todo/tasks/1
        path: ':id',
        component: TodoTaskDetailsComponent,
        data: {
          breadcrumb: 'Edit task'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
