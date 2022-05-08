import { ICharacter } from '../../interfaces/character';
import {
  ElementType,
  IElement,
} from '../../interfaces/element.interface';
import { Character } from './Character';
import { Element } from '../Element/Element';

export class Manwe extends Character {
  element: IElement;
  constructor(_name: string) {
    super(_name);
    this.element = new Element(ElementType.AIR);
    this.inventory.weapon[0].element = ElementType.AIR; // this.element.elementInstance;
    this.inventory.armor[0].element = ElementType.AIR; // this.element.elementInstance;
  }
  public attack(target: ICharacter): number {
    const damage =
      this.element.elementInstance.attacks.expansiveHeavens(
        this.level,
      );
    target.health -= damage;

    return target.health;
  }
}
