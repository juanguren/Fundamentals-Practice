import Hero from "./Hero";
import { itemType } from "./types";

const addItems = (hero: Hero, elements: any[], item: itemType): Hero => {
  const itemSelector = {
    food: hero.inventory.food,
    weapons: hero.inventory.weapons,
  };

  itemSelector[item].push(...elements);
  return hero;
};

export default { addItems };
