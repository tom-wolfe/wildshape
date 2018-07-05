import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@ws/shared/shared.module';

import { WildshapeEffects, wildshapeFeature, wildshapeReducer } from './store';
import { WildshapeRoutingModule } from './wildshape-routing.module';
import { WildshapeComponent } from './wildshape.component';

const COMPONENTS = [
  WildshapeComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    WildshapeRoutingModule,
    StoreModule.forFeature(wildshapeFeature, wildshapeReducer),
    EffectsModule.forFeature([WildshapeEffects])
  ],
  exports: [
    RouterModule,
    ...COMPONENTS
  ]
})
export class WildshapeModule { }
