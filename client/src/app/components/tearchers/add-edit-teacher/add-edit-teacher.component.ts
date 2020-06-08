import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Teacher } from 'src/app/models';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'add-edit-teacher',
  templateUrl: './add-edit-teacher.component.html',
  styleUrls: ['./add-edit-teacher.component.css']
})
export class AddEditTeacherComponent implements OnInit {

  teacherForm: FormGroup;

  teacher: Teacher;

  constructor(private fb: FormBuilder, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.createTeacherFormGroup();
  }

  createTeacherFormGroup() {
    this.teacherForm = this.fb.group({
      username: [],
      password: [],
      firstName: [],
      lastName: [],
      gender: [],
    });
  }

  addNewTeacher() {
    const newTeacher = this.teacherForm.value;
    this.teacherService.createNewTeacher(newTeacher).subscribe(res => {
      console.log(res);
    });
  }
}
