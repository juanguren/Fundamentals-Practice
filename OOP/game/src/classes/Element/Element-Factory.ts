import {
  ElementType,
  IElement,
} from '../../interfaces/element.interface';
import { Earth } from './elements/earth';
import { Fire } from './elements/fire';
import { Water } from './elements/water';
import { Air } from './elements/air';

export class ElementFactory {
  public static createElement(element: ElementType): IElement {
    const elementSelector = {
      air: new Air(),
      fire: new Fire(),
      water: new Water(),
      earth: new Earth(),
    };

    return elementSelector[element];
  }
}
