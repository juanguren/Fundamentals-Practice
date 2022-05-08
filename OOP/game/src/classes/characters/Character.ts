import { ICharacter } from '../../interfaces/character';
import { initialInventory } from '../items/item-utils';
import { IInventory } from '../items/items-interface';

export abstract class Character implements ICharacter {
  name: string;
  health: number = 100;
  level: number = 1;
  private isAlive: boolean = true;
  inventory: IInventory = initialInventory;
  constructor(_name: string) {
    this.name = _name;
  }
  abstract attack(target: ICharacter | any): number;
}
