import { Action } from '@ngrx/store';

export class LoadCreatures implements Action {
  public static readonly TYPE = '[Wildshape] Load Creatures';
  readonly type = LoadCreatures.TYPE;
  constructor() { }
}

export class SetCreatures implements Action {
  public static readonly TYPE = '[Wildshape] Set Creatures';
  readonly type = SetCreatures.TYPE;
  constructor(public creatures: any[]) { }
}

export type WildshapeAction = LoadCreatures | SetCreatures;
