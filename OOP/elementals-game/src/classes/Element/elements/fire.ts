import {
  ElementType,
  IElement,
  IElementAttacks,
} from '../../../interfaces/element.interface';

export class Fire implements IElement {
  attacks: IElementAttacks[ElementType];

  constructor() {
    this.attacks = {
      scorchingSun(level: number): number {
        return level * 2.5;
      },
    };
  }
}
