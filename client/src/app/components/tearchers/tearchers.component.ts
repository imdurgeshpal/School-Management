import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'tearchers',
  templateUrl: './tearchers.component.html',
  styleUrls: ['./tearchers.component.css']
})
export class TearchersComponent implements OnInit {

  teachers: Teacher[] = [];
  columnDefs: ColDef[];
  constructor() { }

  ngOnInit(): void {
    this.columnDefs = this.getColumnDef();
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
}
