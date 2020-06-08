import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { JwtRequest, User } from '../models';
import { JWT_TOKEN } from '../core/constants/sms-constants';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private httpClient: HttpClient) { }


  public isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_TOKEN);
    // Check whether the token is expired and return
    // true or false
    return !!token;
  }

  authenticate(jwtRequest: JwtRequest): Observable<any> {
    return this.httpClient.post<any>('authenticate', jwtRequest).pipe(
      tap(res => {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(res.token);
        this.user = decodedToken.user;
      })
    );
  }
}
