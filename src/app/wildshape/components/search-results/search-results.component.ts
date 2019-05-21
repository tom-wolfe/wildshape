import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '@ws/core/store';
import { Creature } from '@ws/wildshape/models';
import { selectors, SetSortField } from '@ws/wildshape/store';
import { maxDamage } from '@ws/wildshape/utils';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'ws-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  maxDamage = maxDamage;

  creatures: Creature[];

  columns: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true
      // TODO: LINK Name
    },
    // TODO: Challenge rating type.
    { headerName: 'CR', field: 'challenge.rating', sortable: true, filter: true, width: 60 },
    // TODO: Title case.
    { headerName: 'Size', field: 'size', sortable: true, filter: true, width: 80 },
    // TODO: Dmage
    { headerName: 'HP', field: 'hp.average', sortable: true, filter: true, width: 60 },
    {
      headerName: 'Abilities',
      children: [
        { headerName: 'STR', field: 'abilities.str', sortable: true, filter: true, width: 70 },
        { headerName: 'DEX', field: 'abilities.dex', sortable: true, filter: true, width: 70 },
        { headerName: 'CON', field: 'abilities.con', sortable: true, filter: true, width: 70 },
        { headerName: 'INT', field: 'abilities.int', sortable: true, filter: true, width: 70 },
        { headerName: 'WIS', field: 'abilities.wis', sortable: true, filter: true, width: 70 },
        { headerName: 'CHA', field: 'abilities.cha', sortable: true, filter: true, width: 70 },
      ]
    },
    {
      headerName: 'Senses',
      children: [
        // TODO: Hide if zero.
        { headerName: 'Truesight', field: 'senses.truesight', sortable: true, filter: true, width: 90 },
        { headerName: 'Blindsight', field: 'senses.blindsight', sortable: true, filter: true, width: 100 },
        { headerName: 'Darkvision', field: 'senses.darkvision', sortable: true, filter: true, width: 100 },
        { headerName: 'Tremorsense', field: 'senses.tremorsense', sortable: true, filter: true, width: 110 },
      ]
    },
    {
      headerName: 'Speed',
      children: [
        // TODO: Hide if zero,
        { headerName: 'Walk', field: 'speed.walk', sortable: true, filter: true, width: 70 },
        { headerName: 'Fly', field: 'speed.fly', sortable: true, filter: true, width: 70 },
        { headerName: 'Climb', field: 'speed.climb', sortable: true, filter: true, width: 80 },
        { headerName: 'Burrow', field: 'speed.burrow', sortable: true, filter: true, width: 80 },
        { headerName: 'Swim', field: 'speed.swim', sortable: true, filter: true, width: 70 },
      ]
    },
  ];

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
