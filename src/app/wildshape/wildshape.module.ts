import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import * as Components from './components';
import { WildshapeComponent } from './wildshape.component';
import { WildshapeRoutingModule } from './wildshape.routing';

const COMPONENTS = [
  WildshapeComponent,
  Components.SearchResultsComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    WildshapeRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [
  ],
  exports: [
    WildshapeComponent
  ]
})
export class WildshapeModule { }
