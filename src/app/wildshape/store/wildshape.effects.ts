import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';

import * as Wildshape from './wildshape.actions';

@Injectable()
export class WildshapeEffects {
  constructor(private actions: Actions<Action>, private http: HttpClient) { }

  @Effect() loadCreatures = this.actions
    .ofType<Wildshape.LoadCreatures>(Wildshape.LoadCreatures.TYPE)
    .pipe(
      mergeMap(() => this.http.get<any[]>('assets/monsters.json').pipe(
        map(data => new Wildshape.SetCreatures(data))
      ))
    );
}
