import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import * as Components from './components';

const COMPONENTS = [
  Components.HeaderComponent,
  Components.FooterComponent
];

const MODULES = [
  RouterModule,
  HttpClientModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES 
  ]
})
export class CoreModule { }
