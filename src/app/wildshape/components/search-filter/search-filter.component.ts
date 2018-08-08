import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@ws/core/store';
import { selectors, SetFilterLevel, SetFilterMoon, WildshapeFilter } from '@ws/wildshape/store';

@Component({
  selector: 'ws-search-filter',
  templateUrl: './search-filter.component.html'
})
export class SearchFilterComponent {
  filter: WildshapeFilter;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectors.filter)).subscribe(f => this.filter = f);
  }

  setLevel(level: number) {
    this.store.dispatch(new SetFilterLevel(level));
  }

  setMoon(moon: boolean) {
    this.store.dispatch(new SetFilterMoon(moon));
  }
}
