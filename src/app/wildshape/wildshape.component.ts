import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { canWildshape, challengeRatingFormatter, druidLevel, moonLevel, titleCaseFormatter, zeroFormatter } from '@ws/utils';
import { ColDef, ColGroupDef, GridReadyEvent, ValueGetterParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Creature } from './models';

function creatureLink(creature: Creature) {
  const name = creature.name.toLowerCase().replace(' ', '-');
  return 'https://www.dndbeyond.com/monsters/' + name;
}

function linkRenderer(p: ValueGetterParams): string {
  const creature = p.data as Creature;
  return `<a href="${creatureLink(creature)}" target="_blank">${creature.name}</a>`;
}
=======
>>>>>>> Remove NGRX

@Component({
  selector: 'ws-wildshape',
  templateUrl: './wildshape.component.html',
  styleUrls: ['./wildshape.component.scss']
})
export class WildshapeComponent {
<<<<<<< HEAD
  creatures: Observable<Creature[]>;

  columns: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Requirements',
      children: [
        { headerName: 'Level', valueGetter: p => druidLevel(p.data), sortable: true, filter: true, width: 70 },
        { headerName: 'Moon Level', valueGetter: p => moonLevel(p.data), sortable: true, filter: true, width: 80 },
      ]
    },
    { headerName: 'Name', sortable: true, filter: true, cellRenderer: linkRenderer },
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

  options: any = { domLayout: 'autoHeight' };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.creatures = this.http.get<Creature[]>('https://twolfe.co.uk/dnd/data/monsters.json').pipe(
      map(creatures => creatures.filter(canWildshape))
    );
  }

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }
=======
  constructor() { }
>>>>>>> Remove NGRX
}
