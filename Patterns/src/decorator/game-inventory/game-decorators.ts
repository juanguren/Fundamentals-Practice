import Hero from "./Hero";
import { itemType } from "./types";

const addItems = (hero: Hero, element: any[], item: itemType): Hero => {
  const itemSelector = {
    food: hero.inventory.food,
    weapons: hero.inventory.weapons,
  };

  itemSelector[item].push(...element);
  return hero;
};

export default { addItems };
