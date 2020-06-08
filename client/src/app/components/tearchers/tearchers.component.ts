import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models';
import { ColDef } from 'ag-grid-community';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tearchers',
  templateUrl: './tearchers.component.html',
  styleUrls: ['./tearchers.component.css']
})
export class TearchersComponent implements OnInit {

  teachers: Teacher[];
  columnDefs: ColDef[];
  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.columnDefs = this.getColumnDef();

    this.teacherService.getAllTeachers().subscribe(res => {
      this.teachers = res;
    });
  }

  getColumnDef(): ColDef[] {
    return [
      {
        headerName: 'Sr.No',
        valueGetter: (data) => data.node.rowIndex + 1
      },

      { headerName: 'Employee Code', field: 'employeeId' },
      { headerName: 'Name', field: 'firstName' },
      { headerName: 'Incharge Class' },
      { headerName: ' Subjects Handling' },
      { headerName: 'Phone' },
      { headerName: 'Action' }
    ];
  }

  createNewTeacher() {
    this.router.navigateByUrl('container/add-edit-teacher');
  }
}
