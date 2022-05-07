import { Character } from '../../../classes/characters/Character';

describe('Character', () => {
  it('should create a Character instance', () => {
    const character = new Character('Eamon');

    expect(character).toBeInstanceOf(Character);
  });
});
