import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';

export const httpInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiPrefixInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }
]
