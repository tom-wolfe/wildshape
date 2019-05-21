import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { booleanFormatter, challengeRatingFormatter, druidLevel, moonDruidOnly, titleCaseFormatter, zeroFormatter } from '@ws/utils';
import { AgGridNg2 } from 'ag-grid-angular';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Creature } from './models';

@Component({
  selector: 'ws-wildshape',
  templateUrl: './wildshape.component.html'
})
export class WildshapeComponent {
  creatures: Observable<Creature[]>;

  columns: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Requirements',
      children: [
        { headerName: 'Level', valueGetter: p => druidLevel(p.data), sortable: true, filter: true, width: 70 },
        { headerName: 'Moon?', valueGetter: p => moonDruidOnly(p.data), valueFormatter: booleanFormatter, sortable: true, filter: true, width: 80 },
      ]
    },
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true
      // TODO: LINK Name
    },
    { headerName: 'CR', field: 'challenge.rating', sortable: true, filter: true, width: 60, valueFormatter: challengeRatingFormatter },
    { headerName: 'Size', field: 'size', sortable: true, filter: true, width: 90, valueFormatter: titleCaseFormatter },
    // TODO: Damage
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
        { headerName: 'Truesight', field: 'senses.truesight', sortable: true, filter: true, width: 90, valueFormatter: zeroFormatter },
        { headerName: 'Blindsight', field: 'senses.blindsight', sortable: true, filter: true, width: 100, valueFormatter: zeroFormatter },
        { headerName: 'Darkvision', field: 'senses.darkvision', sortable: true, filter: true, width: 100, valueFormatter: zeroFormatter },
        { headerName: 'Tremorsense', field: 'senses.tremorsense', sortable: true, filter: true, width: 110, valueFormatter: zeroFormatter },
      ]
    },
    {
      headerName: 'Speed',
      children: [
        { headerName: 'Walk', field: 'speed.walk', sortable: true, filter: true, width: 70, valueFormatter: zeroFormatter },
        { headerName: 'Fly', field: 'speed.fly', sortable: true, filter: true, width: 70, valueFormatter: zeroFormatter },
        { headerName: 'Climb', field: 'speed.climb', sortable: true, filter: true, width: 80, valueFormatter: zeroFormatter },
        { headerName: 'Burrow', field: 'speed.burrow', sortable: true, filter: true, width: 80, valueFormatter: zeroFormatter },
        { headerName: 'Swim', field: 'speed.swim', sortable: true, filter: true, width: 70, valueFormatter: zeroFormatter },
      ]
    },
  ];

  options: any = {
    domLayout: 'autoHeight'
  };

  @ViewChild('grid') grid: AgGridNg2;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.creatures = this.http.get<Creature[]>('https://twolfe.co.uk/dnd/data/monsters.json');
  }

  creatureLink(creature: Creature) {
    const name = creature.name.toLowerCase().replace(' ', '-');
    return 'https://www.dndbeyond.com/monsters/' + name;
  }
}
