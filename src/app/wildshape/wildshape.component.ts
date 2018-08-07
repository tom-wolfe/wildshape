import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@ws/core/store';
import { LoadCreatures } from '@ws/wildshape/store';

@Component({
  selector: 'ws-wildshape',
  templateUrl: './wildshape.component.html'
})
export class WildshapeComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadCreatures());
  }
}
