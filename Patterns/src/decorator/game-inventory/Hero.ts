import { nanoid } from "nanoid";
import { IHero, Inventory } from "./types";

export default class Hero implements IHero {
  public id: string;
  public name: string;
  public level: number;
  public inventory: Inventory;

  constructor(_name: string) {
    this.name = _name;
    this.id = nanoid();
    this.level = 1;
    this.inventory = { food: [], weapons: [] };
  }

  getInventory() {
    return this.inventory;
  }
}
