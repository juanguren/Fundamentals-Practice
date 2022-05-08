import {
  ElementType,
  IElement,
  IElementAttacks,
} from '../../../interfaces/element.interface';

export class Water implements IElement {
  attacks: IElementAttacks[ElementType];

  constructor() {
    this.attacks = {
      flowingLeviathan(level: number): number {
        return level * 2.8;
      },
    };
  }
}
