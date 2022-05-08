import { ICharacter } from '../../interfaces/character';
import {
  ElementType,
  IElement,
} from '../../interfaces/element.interface';
import { Character } from './Character';
import { Element } from '../Element/Element';

export class Fenix extends Character {
  element: IElement;
  constructor(_name: string) {
    super(_name);

    this.element = new Element(ElementType.FIRE);
    this.inventory.weapon[0].element = ElementType.FIRE; // this.element.elementInstance;
    this.inventory.armor[0].element = ElementType.FIRE; // this.element.elementInstance;
  }
  public attack(target: ICharacter): number {
    const damage = this.element.elementInstance.attacks.scorchingSun(
      this.level,
    );
    target.health -= damage;

    return target.health;
  }
}
