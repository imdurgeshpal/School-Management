import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../core/constants/api-constants';
import { Observable } from 'rxjs';
import { Student } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(student.getAllStudents);
  }
}
