import { Component } from '@angular/core';
import { AppState } from '@ws/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ws-wildshape',
  templateUrl: './wildshape.component.html'
})
export class WildshapeComponent {
  constructor(private store: Store<AppState>) { }
}
