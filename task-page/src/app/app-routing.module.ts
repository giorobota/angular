import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'tasks/:id', component: TaskComponent },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'posts', 
    component: FormComponent,
    pathMatch: "full"
  }
 /* {
    path: 'post/:id',
    component: FormEditComponent
  }
  */
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
