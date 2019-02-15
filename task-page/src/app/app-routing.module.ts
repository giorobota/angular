import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'tasks/:id', component: TaskComponent },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
