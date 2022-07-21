import { nanoid } from "nanoid";
import { IHero, IMovie, IUser } from "../types/types";
const faker = require("faker");

export const multiplyByX = (array: any[], multiplier: number): any => {
  const multiply = (value: number) => value * multiplier;
  const isNumber = (value: any): value is number => typeof value === "number";

  const multiplied = array.map((value) =>
    isNumber(value) ? multiply(value) : value
  );

  return multiplied.filter(isNumber);
};

export const largestOfFour = (values: any[]) => {
  const largestList = [];
  for (let group of values) {
    largestList.push(Math.max(...group));
  }
  return largestList;
};

export const getDrinkingStatus = (age: number) => age >= 18;

export const getUser = (): IUser => {
  const age = faker.datatype.number({ min: 13, max: 80 });

  return {
    name: faker.name.firstName(),
    age,
    ssn: faker.datatype.uuid(),
    drinkingStatus: getDrinkingStatus(age),
  };
};

export default class Hero implements IHero {
  public id: string;
  public name: string;
  public level: number;
  public inventory: any;

  constructor(_name: string) {
    this.name = _name;
    this.id = nanoid();
    this.level = 1;
    this.inventory = { items: [] };
  }

  set includeInInventory(item: any) {
    this.inventory.items.push(item);
  }

  getInventory() {
    return this.inventory;
  }
}

export const createNewHero = (name: string): Hero => new Hero(name);

export class SingletonConnection {
  private static instance: SingletonConnection;
  private urlString: string = "http://localhost:3000";

  private constructor() {}

  public static getInstance(): SingletonConnection {
    if (!this.instance) {
      this.instance = new SingletonConnection();
    }
    return this.instance;
  }

  public static get url() {
    return this.getInstance().urlString;
  }
}

export class Media {
  public movies: IMovie[];

  constructor(content: IMovie[]) {
    this.movies = content;
  }
}
