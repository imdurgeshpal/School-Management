import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptors } from './http/interceptors';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptors
  ]
})
export class CoreModule { }
