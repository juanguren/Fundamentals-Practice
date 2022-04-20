import Hero from "./Hero";
import { Food, itemType, Weapon } from "./types";

const addItems = (hero: Hero, elements: (Weapon | Food)[]): Hero => {
  const itemSelector = {
    food: hero.inventory.food,
    weapons: hero.inventory.weapons,
  };

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
