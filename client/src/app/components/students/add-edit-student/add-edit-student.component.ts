import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { Student } from 'src/app/models';
import { StudentService } from 'src/app/services';

@Component({
  selector: 'add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  studentForm: FormGroup;

  student: Student;

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    this.createStudentFormGroup();
  }

  createStudentFormGroup() {
    this.studentForm = this.fb.group({
      username: [],
      password: [],
      firstName: [],
      lastName: [],
      gender: [],
      guardian: this.fb.array([this.createGuardianFrom()])
    });
  }

  createGuardianFrom(): FormGroup {
    return this.fb.group({
      username: [],
      password: [],
      firstName: [],
      lastName: [],

    });
  }

  addNewUser() {
    const newStudent = this.studentForm.value;
    this.studentService.createNewStudent(newStudent).subscribe(res => {
      console.log(res);
    });
  }
}
