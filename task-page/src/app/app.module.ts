import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    FormComponent,
    FormEditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
