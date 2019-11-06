import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        let startTime;
        if (req.url.includes('products')) {
            startTime = Date.now();
        }

        return next.handle(req).pipe(
            filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
            map((event: HttpResponse<any>) => {
                if (event.url.includes('products')) {
                    console.log('Request to "/products" took:', Date.now() - startTime);
                }
                return event;
            })
        );
    }
}
