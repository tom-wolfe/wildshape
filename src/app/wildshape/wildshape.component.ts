import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { canWildshape, challengeRatingFormatter, druidLevel, moonLevel, titleCaseFormatter, zeroFormatter, maxDamageGetter, damageFormatter, damageComparator, tankinessGetter } from '@ws/utils';
import { ColDef, ColGroupDef, GridReadyEvent, ValueGetterParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Creature } from './models';


function linkRenderer(p: ValueGetterParams): string {
  const creature = p.data as Creature;
  return `<a href="${creature.source}" target="_blank">${creature.name}</a>`;
}

@Component({
  selector: 'ws-wildshape',
  templateUrl: './wildshape.component.html'
})
export class WildshapeComponent {
  creatures: Observable<Creature[]>;

  columns: (ColDef | ColGroupDef)[] = [
    { headerName: 'Name', sortable: true, filter: true, cellRenderer: linkRenderer, minWidth: 170, pinned: true, sort: 'asc' },
    { headerName: 'Size', field: 'size', sortable: true, filter: true, minWidth: 90, valueFormatter: titleCaseFormatter },
    { headerName: 'CR', field: 'challenge.rating', sortable: true, filter: 'agNumberColumnFilter', minWidth: 60, valueFormatter: challengeRatingFormatter },
    {
      headerName: 'Required Level',
      children: [
        { headerName: '', valueGetter: p => druidLevel(p.data), sortable: true, filter: 'agNumberColumnFilter', minWidth: 70 },
        { headerName: 'Moon', valueGetter: p => moonLevel(p.data), sortable: true, filter: 'agNumberColumnFilter', minWidth: 80 },
      ]
    },
    {
      headerName: 'Survivability',
      children: [
        { headerName: 'HP', field: 'hp.average', sortable: true, filter: 'agNumberColumnFilter', minWidth: 60 },
        { headerName: 'AC', field: 'armor.class', sortable: true, filter: 'agNumberColumnFilter', minWidth: 60 },
        { headerName: 'Tankiness', valueGetter: tankinessGetter, sortable: true, filter: 'agNumberColumnFilter', minWidth: 100 },
      ]
    },
    { headerName: 'Damage', valueGetter: maxDamageGetter, sortable: true, minWidth: 100, valueFormatter: damageFormatter, comparator: damageComparator },
    {
      headerName: 'Speed',
      children: [
        { headerName: 'Walk', field: 'speed.walk', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70, valueFormatter: zeroFormatter },
        { headerName: 'Fly', field: 'speed.fly', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70, valueFormatter: zeroFormatter },
        { headerName: 'Climb', field: 'speed.climb', sortable: true, filter: 'agNumberColumnFilter', minWidth: 80, valueFormatter: zeroFormatter },
        { headerName: 'Burrow', field: 'speed.burrow', sortable: true, filter: 'agNumberColumnFilter', minWidth: 80, valueFormatter: zeroFormatter },
        { headerName: 'Swim', field: 'speed.swim', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70, valueFormatter: zeroFormatter },
      ]
    },
    {
      headerName: 'Abilities',
      children: [
        { headerName: 'STR', field: 'abilities.strength', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70 },
        { headerName: 'DEX', field: 'abilities.dexterity', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70 },
        { headerName: 'CON', field: 'abilities.constitution', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70 },
        { headerName: 'INT', field: 'abilities.intelligence', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70 },
        { headerName: 'WIS', field: 'abilities.wisdom', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70 },
        { headerName: 'CHA', field: 'abilities.charisma', sortable: true, filter: 'agNumberColumnFilter', minWidth: 70 },
      ]
    },
    {
      headerName: 'Senses',
      children: [
        { headerName: 'Darkvision', field: 'senses.darkvision', sortable: true, filter: 'agNumberColumnFilter', minWidth: 100, valueFormatter: zeroFormatter },
        { headerName: 'Truesight', field: 'senses.truesight', sortable: true, filter: 'agNumberColumnFilter', minWidth: 90, valueFormatter: zeroFormatter },
        { headerName: 'Blindsight', field: 'senses.blindsight', sortable: true, filter: 'agNumberColumnFilter', minWidth: 100, valueFormatter: zeroFormatter },
        { headerName: 'Tremorsense', field: 'senses.tremorsense', sortable: true, filter: 'agNumberColumnFilter', minWidth: 110, valueFormatter: zeroFormatter },
      ]
    },
    {
      headerName: 'Damage',
      children: [
        { headerName: 'Resistances', field: 'damage.resistances', sortable: true, minWidth: 450 },
        { headerName: 'Immunities', field: 'damage.immunities', sortable: true, minWidth: 150 },
        { headerName: 'Vulnerabilities', field: 'damage.vulnerabilities', sortable: true, minWidth: 100 },
      ]
    },
    {
      headerName: 'Condition',
      children: [
        { headerName: 'Immunities', field: 'condition.immunities', sortable: true, minWidth: 500 },
      ]
    },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.creatures = this.http.get<Creature[]>('https://twolfe.co.uk/dnd/data/monsters.json').pipe(
      map(creatures => creatures.filter(canWildshape))
    );
  }

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }
}
