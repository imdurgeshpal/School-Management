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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    TearchersComponent,
    StudentsComponent,
    ParentsComponent,
    LoginComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
