import { NgModule } from '@angular/core';
import { CoreModule } from '@ws/core';
import { WildshapeModule } from '@ws/wildshape';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WildshapeModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
