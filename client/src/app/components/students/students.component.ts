import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services';
import { Student } from 'src/app/models';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  columnDefs: ColDef[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    this.columnDefs = this.getColumnDef();

    this.studentService.getAllStudents().subscribe(res => {
      this.students = res;
    });
  }


  getColumnDef(): ColDef[] {
    return [
      { headerName: 'Sr.No', },

      { headerName: 'Name', field: 'firstName' },
      { headerName: 'Gender', field: 'gender' }
    ];
  }
}
