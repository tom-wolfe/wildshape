import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '@ws/core/store';
import { Creature } from '@ws/wildshape/models';
import { selectors, SetSortField } from '@ws/wildshape/store';
import * as _ from 'lodash';
import { maxDamage } from '@ws/wildshape/utils';

@Component({
  selector: 'ws-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  maxDamage = maxDamage;

  creatures: Creature[];

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectors.searchResults)).subscribe(c => this.creatures = c);
  }

  creatureLink(creature: Creature) {
    const name = creature.name.toLowerCase().replace(' ', '-');
    return 'https://www.dndbeyond.com/monsters/' + name;
  }

  setSort(field: string) {
    this.store.dispatch(new SetSortField(field));
  }
}
