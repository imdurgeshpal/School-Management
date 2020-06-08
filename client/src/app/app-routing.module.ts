import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TearchersComponent } from './components/tearchers/tearchers.component';
import { StudentsComponent } from './components/students/students.component';
import { ParentsComponent } from './components/parents/parents.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './layout/login/login.component';
import { ContainerComponent } from './layout/container/container.component';
import { AddEditStudentComponent } from './components/students/add-edit-student/add-edit-student.component';
import { AddEditTeacherComponent } from './components/tearchers/add-edit-teacher/add-edit-teacher.component';


const routes: Routes = [
    { path: '', redirectTo: '/container', pathMatch: 'full' },
    {
        path: 'container', component: ContainerComponent, canActivate: [AuthGuard], children: [
            { path: '', component: DashboardComponent },
            { path: 'teachers', component: TearchersComponent },
            { path: 'students', component: StudentsComponent },
            { path: 'parents', component: ParentsComponent },
            { path: 'add-edit-student', component: AddEditStudentComponent },
            { path: 'add-edit-teacher', component: AddEditTeacherComponent }
        ]
    },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }