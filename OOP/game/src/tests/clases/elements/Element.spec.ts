import { Element } from '../../../classes/Element/Element';
import { Fire } from '../../../classes/Element/elements/fire';
import { ElementType } from '../../../interfaces/element.interface';

describe('Test the Element class', () => {
  it('should create an Element instance', () => {
    const type = ElementType.FIRE;
    const element = new Element(type);

    expect(element).toBeTruthy();
    expect(element.class).toBe(type);
    expect(element.attacks).toBeDefined();
    expect(element.elementInstance).toBeInstanceOf(Fire);
    expect(element.getElement()).toBeInstanceOf(Fire);

    expect(element).toBeInstanceOf(Element);
  });
});
