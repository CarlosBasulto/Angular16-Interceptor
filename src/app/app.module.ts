import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpBackend } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  // Importa tu AppRoutingModule
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { MyInterceptor } from './my-interceptor.interceptor';
import { ErrorInterceptor } from './error-interceptor.interceptor';
import { ParamsInterceptor } from './params-interceptor.interceptor';
import { CustomComponent } from './custom-component/custom-component.component';
import { CustomService } from './custom-service.service';
import { CustomInterceptor } from './custom-interceptor.interceptor';
import { CustomHttpClientService } from './custom-http-client.service.ts.service';



@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [
    
    DataService,
    CustomService,
  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: ParamsInterceptor,
      multi: true
    }
    ,  CustomInterceptor,
    {
      provide: CustomHttpClientService,
      useFactory: (backend: HttpBackend, interceptor: CustomInterceptor) =>
        new CustomHttpClientService(backend, interceptor),
      deps: [HttpBackend, CustomInterceptor],
    },
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
