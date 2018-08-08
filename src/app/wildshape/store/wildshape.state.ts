import { Creature } from '@ws/wildshape/models';

export interface WildshapeState {
  creatures: Creature[];
  filter: WildshapeFilter;
  sort: Sort;
}

export interface Sort {
  field: string;
  ascending: boolean;
}

export interface WildshapeFilter {
  level: number;
  moon: boolean;
}
