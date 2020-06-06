
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SESSION_BEARER, JWT_TOKEN } from '../../constants/sms-constants';

/**
 * @description interceptor for adding authorization token into header on every server request
 *
 * @export
 * @class TokenInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = localStorage.getItem(JWT_TOKEN);
    if (!!authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `${SESSION_BEARER} ${authToken}`
        }
      });
    }
    return next.handle(req).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let JToken = '';
          if (JToken) {
            localStorage.setItem(JWT_TOKEN, JToken);
          }
        }
      })
    );
  }
}
