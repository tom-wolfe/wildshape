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

export class SetFilterLevel implements Action {
  public static readonly TYPE = '[Wildshape] Set Filter Level';
  readonly type = SetFilterLevel.TYPE;
  constructor(public level: number) { }
}

export class SetFilterMoon implements Action {
  public static readonly TYPE = '[Wildshape] Set Filter Moon';
  readonly type = SetFilterMoon.TYPE;
  constructor(public moon: boolean) { }
}

export class SetSortField implements Action {
  public static readonly TYPE = '[Wildshape] Set Sort Field';
  readonly type = SetSortField.TYPE;
  constructor(public field: string) { }
}

export type WildshapeAction = LoadCreatures | SetCreatures | SetFilterLevel | SetFilterMoon | SetSortField;
