import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }


  getUsersCount(): any {
    return this.httpClient.get<any>('dashboard/getUsersCount');
  }
}
