// src/app/params-interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Agregar parámetros a todas las solicitudes
    const modifiedReq = req.clone({
      params: req.params.append('custom_param', 'example_value')
    });

    return next.handle(modifiedReq);
  }
}
