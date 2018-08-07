import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@ws/core/store';
import { Creature } from '@ws/wildshape/models';
import { selectors } from '@ws/wildshape/store';
import * as _ from 'lodash';

@Component({
  selector: 'ws-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  creatures: Creature[];

  constructor(private store: Store<AppState>) {
    this.store.select(selectors.searchResults).subscribe(c => this.creatures = c);
  }

  maxDamage(creature: Creature) {
    return _.max(creature.actions.filter(a => a.damage).map(a => a.damage.average));
  }
}
