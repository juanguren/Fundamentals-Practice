import Hero from "./src/decorator/game-inventory/Hero";
import Decorator from "./src/decorator/game-inventory/game-decorators";
import { itemType, Weapon } from "./src/decorator/game-inventory/types";

const hero = new Hero("Parcival");
console.log(hero);

const newWeapon: Weapon = { name: "Orb of ossobox", active: true, damage: 9 };
// itemType FOOD with key/values of weapon gets added anyway. How to type check in the decorator?
const heroWithWeapons = Decorator.addItems(hero, [newWeapon], itemType.WEAPON);
console.log(heroWithWeapons.getInventory());
