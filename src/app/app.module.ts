import { NgModule } from '@angular/core';
import { CoreModule } from '@ws/core';
import { SharedModule } from '@ws/shared';
import { WildshapeModule } from '@ws/wildshape';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    WildshapeModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
