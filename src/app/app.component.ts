// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { CustomHttpClientService } from './custom-http-client.service.ts.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Interceptor Globales y Customizados</h2>
     
      <button (click)="fetchData2()">Llamadas HTTP con Interceptor Globales</button>
      <button (click)="fetchData3()">Llamadas Http con interceptor Customizado</button>

<h5>Recuerda abrir el inspector de código para analaizar las cabeceras y ver las diferencias</h5>


<h4> Respuesta de la llamada API</h4>

<div style="backgroung-color:black">

<pre>{{ data | json }}</pre>
</div>


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
