// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { CustomHttpClientService } from './custom-http-client.service.ts.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Data from API 1, llamada base</h2>
      <pre>{{ data | json }}</pre>
      <button (click)="fetchData2()">Fetch Data 2</button>
      <button (click)="fetchData3()">Fetch Data 2</button>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService,private customHttpClient: CustomHttpClientService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe((response) => {
      this.data = response;
    });
  }

  fetchData2() {
   
    this.customHttpClient.get('https://jsonplaceholder.typicode.com/todos/4').subscribe((response) => {
      this.data = response;
    });
  }


  fetchData3() {
   


/*

const modifiedReq = req.clone({
      setHeaders: {
        'Custom-Header': 'Interceptor Example',
        'Otra': 'OtraCabecera'
      }
    });


 */

//Clonarlo y añadir nuevas cabeceras
    this.customHttpClient.getCloneAdd('https://jsonplaceholder.typicode.com/todos/4').subscribe((response) => {
      this.data = response;
    });
  }
}
