import { Injectable } from '@angular/core';
import { Teacher } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>('teacher/getAllTeachers');
  }
}
