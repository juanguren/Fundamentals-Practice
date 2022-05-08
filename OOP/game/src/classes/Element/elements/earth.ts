import {
  ElementType,
  IElement,
  IElementAttacks,
} from '../../../interfaces/element.interface';

export class Earth implements IElement {
  attacks: IElementAttacks[ElementType];

  constructor() {
    this.attacks = {
      ragingGolem(level: number): number {
        return level * 3;
      },
    };
  }
}
