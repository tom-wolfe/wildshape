import { Creature } from '@ws/wildshape/models';

export interface WildshapeState {
  creatures: Creature[];
  filter: WildshapeFilter;
  sort: Sort;
}

export interface Sort {
  field: string;
  ascending: true;
}

export interface WildshapeFilter {
  moon: boolean;
  level: boolean;
}