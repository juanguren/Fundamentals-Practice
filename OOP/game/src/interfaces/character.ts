import { IInventory } from '../classes/items/items-interface';
import { IElement } from './element.interface';

export interface ICharacter {
  name: string;
  health: number;
  level: number;
  // attack(target: ICharacter | any): void;
  inventory: IInventory;
}
