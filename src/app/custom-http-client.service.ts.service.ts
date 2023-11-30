// custom-http-client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomInterceptor } from './custom-interceptor.interceptor';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpClientService {
  private httpClient: HttpClient;

  constructor(private backend: HttpBackend, private customInterceptor: CustomInterceptor) {
    
    this.httpClient = new HttpClient(backend);
    console.log('Custom Interceptor is applied.');
  }

  // Método para realizar solicitudes GET personalizadas
  get(url: string): Observable<any> {
    
    const request = new HttpRequest('GET', url, { headers: this.customInterceptor.getHeaders() });
    return this.httpClient.request(request);
  }


  // Método para realizar solicitudes GET personalizadas
  getCloneAdd(url: string): Observable<any> {
    //Clonar la llamada y añadir nuevas cabeceras 
    const request = new HttpRequest('GET', url, { headers: this.customInterceptor.getHeaders() });
    return this.httpClient.request(request);
  }


  // Otros métodos según sea necesario
}