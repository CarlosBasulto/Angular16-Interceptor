import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom-component/custom-component.component';
import { CustomService } from './custom-service.service';
import { CustomInterceptor } from './custom-interceptor.interceptor';
import { CustomHttpClientService } from './custom-http-client.service.ts.service';


const routes: Routes = [
  { path: 'custom2', component: CustomComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
