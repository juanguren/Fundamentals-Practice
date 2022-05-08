// https://betterprogramming.pub/understand-object-oriented-programming-with-typescript-c4ff8afa40d

import { Fenix } from './src/classes/characters/fenix';
import { Golem } from './src/classes/characters/golem';

const fenix = new Fenix('Fawkes');

const earthling = new Golem('Earthling');

console.log(fenix.attack(earthling)); // 97.5

console.log(fenix);
/**
 *Fenix {
  health: 100,
  level: 1,
  isAlive: true,
  inventory: { potion: [], weapon: [ [Object] ], armor: [ [Object] ] },
  name: 'Fenix',
  element: Element {
    class: 'fire',
    elementInstance: Fire { attacks: [Object] },
    attacks: { scorchingSun: [Function: scorchingSun] }
  }
}
 */

console.log(fenix.inventory);
/**
 {
  potion: [],
  weapon: [ { id: 1, name: 'Sword', damage: 2, element: 'fire' } ],
  armor: [ { id: 1, name: 'Leather Armor', defense: 2, element: 'fire' } ]
}
 */
