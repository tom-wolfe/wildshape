import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@ws/shared';
import { AgGridModule } from 'ag-grid-angular';

import * as Components from './components';
import { effects, wildshapeFeature, wildshapeReducer } from './store';
import { WildshapeComponent } from './wildshape.component';
import { WildshapeRoutingModule } from './wildshape.routing';

const COMPONENTS = [
  WildshapeComponent,
  Components.SearchFilterComponent,
  Components.SearchResultsComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    SharedModule,
    WildshapeRoutingModule,
    AgGridModule.withComponents([]),
    StoreModule.forFeature(wildshapeFeature, wildshapeReducer),
    EffectsModule.forFeature(effects),
  ],
  providers: [
  ],
  exports: [
    WildshapeComponent
  ]
})
export class WildshapeModule { }
