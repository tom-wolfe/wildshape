export interface Creature {
  legendaryActions: Action[];
  passive: Action[];
  actions: Action[];
  name: string;
  size: string;
  type: string;
  alignment: string;
  abilities: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  hp: {
    average: number;
    formula: string;
  };
  armor: {
    class: number;
    type: string;
  };
  damage: {
    resistances: string[];
    immunities: string[];
    vulnerabilities: string[];
  };
  speed: {
    walk: number;
    burrow: number;
    fly: number;
    climb: number;
    swim: number;
  };
  skills: {
    [key: string]: number;
  };
  sense: {
    passivePerception: number;
    truesight: number;
    blindsight: number;
    darkvision: number;
    tremorsense: number;
  };
  languages: string[];
  environments: string[];
  tags: string[];
  source: string;
  challenge: {
    rating: number;
    experience: number;
  }
}

export interface Action {
  name: string;
  melee: boolean;
  ranged: boolean;
  toHit: number;
  reach: number;
  damage: {
    average: number;
    formula: string;
    type: string;
  }
  description: string;
}