import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TearchersComponent } from './components/tearchers/tearchers.component';
import { StudentsComponent } from './components/students/students.component';
import { ParentsComponent } from './components/parents/parents.component';
import { CoreModule } from './core/core.module';
import { AgGridModule } from 'ag-grid-angular';
import { LoginComponent } from './layout/login/login.component';
import { ContainerComponent } from './layout/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditStudentComponent } from './components/students/add-edit-student/add-edit-student.component';
import { AddEditTeacherComponent } from './components/tearchers/add-edit-teacher/add-edit-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    TearchersComponent,
    StudentsComponent,
    ParentsComponent,
    LoginComponent,
    ContainerComponent,
    AddEditStudentComponent,
    AddEditTeacherComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
