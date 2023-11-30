// src/app/custom-interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Custom Interceptor is applied.');

    const modifiedReq = req.clone({
      headers: new HttpHeaders({
        'Custom-Header222222222222222222222': 'custom-value2222222222222',
        // Agrega otras cabeceras según sea necesario
      }),
    });

    // Continúa con la solicitud modificada
    return next.handle(modifiedReq);
  }


  // Método para obtener las cabeceras personalizadas
  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Custom-Headera': 'custom-value22222222222222222',
      // Agrega otras cabeceras según sea necesario
    });
  }

  
}
