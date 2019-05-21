import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { WildshapeComponent } from './wildshape.component';

const COMPONENTS = [
  WildshapeComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  providers: [
  ],
  exports: [
    WildshapeComponent
  ]
})
export class WildshapeModule { }
