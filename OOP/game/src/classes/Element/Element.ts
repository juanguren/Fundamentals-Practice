import {
  ElementType,
  IElement,
  IElementAttacks,
} from '../../interfaces/element.interface';
import { ElementFactory } from './Element-Factory';

export class Element implements IElement {
  class: ElementType;
  attacks: IElementAttacks[ElementType] | undefined;
  elementInstance?: any;

  constructor(_class: ElementType) {
    this.class = _class;
    this.elementInstance = ElementFactory.createElement(_class);
    this.attacks = this.elementInstance.attacks;
  }

  getElement(): IElement {
    return this.elementInstance;
  }
}
