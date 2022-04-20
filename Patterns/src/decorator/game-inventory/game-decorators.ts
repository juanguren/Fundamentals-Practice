import Hero from "./Hero";
import { Food, itemType, Weapon } from "./types";

// ! TODO: Add support for many Item types, not just Weapons and Food

const addItems = (hero: Hero, elements: (Weapon | Food)[]): Hero => {
  elements.forEach((item) => {
    if ((item as Weapon).damage) {
      const newWeapon = item as Weapon;
      hero.inventory.weapons.push(newWeapon);
    } else {
      const newDish = item as Food;
      hero.inventory.food.push(newDish);
    }
  });

  return hero;
};

export default { addItems };
