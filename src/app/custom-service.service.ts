// src/app/custom-service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CustomInterceptor } from './custom-interceptor.interceptor';
import { CustomHttpClientService } from './custom-http-client.service.ts.service';


@Injectable({
  providedIn: 'root',
})
export class CustomService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/4';
  private lastHeaders: HttpHeaders | null = null;
  constructor(private http: CustomHttpClientService) {}

  fetchData(): Observable<any> {
    console.log('Fetching data with CustomService...');
    // Utiliza la instancia normal de HttpClient
   
   
   
     return this.http.get(this.apiUrl);
  }

  getLastHeaders(): HttpHeaders | null {
    return this.lastHeaders;
  }
}