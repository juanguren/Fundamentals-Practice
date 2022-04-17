export interface IHero {
  id: string;
  name: string;
  level: number;
  inventory: Inventory;
}

export interface Inventory {
  food: Food[];
  weapons: Weapon[];
}

export interface Food {
  name: string;
  points: number;
}

export interface Weapon {
  name: string;
  damage: number;
  active: true;
}

export enum itemType {
  FOOD = "food",
  WEAPON = "weapons",
}
