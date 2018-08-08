import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as Directives from './directives';
import * as Pipes from './pipes';

const MODULES = [
  FormsModule,
  HttpClientModule,
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

const COMPONENTS = [

];

const PIPES = [
  Pipes.NonZeroPipe,
  Pipes.ChallengeRatingPipe
];

const DIRECTIVES = [
  Directives.SortDirective,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
