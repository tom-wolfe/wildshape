import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WildshapeComponent } from './wildshape.component';

const wildshapeRoutes: Routes = [
  { path: '', component: WildshapeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(wildshapeRoutes)
  ],
  exports: [RouterModule]
})
export class WildshapeRoutingModule { }
