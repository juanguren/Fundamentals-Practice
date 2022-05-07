export interface IElement {
  class?: ElementType;
  attacks: IElementAttacks[ElementType] | undefined;
  elementInstance?: any;
}

export enum ElementType {
  FIRE = 'fire',
  WATER = 'water',
  EARTH = 'earth',
  AIR = 'air',
}

export interface IElementAttacks {
  [ElementType.FIRE]: IFireAttacks;
  [ElementType.WATER]: IWaterAttacks;
  [ElementType.EARTH]: IEarthAttacks;
  [ElementType.AIR]: IAirAttacks;
}

interface IFireAttacks {
  scorchingSun(level: number): number;
}

interface IWaterAttacks {
  flowingLeviathan(level: number): number;
}

interface IEarthAttacks {
  ragingGolem(level: number): number;
}

interface IAirAttacks {
  expansiveHeavens(level: number): number;
}
