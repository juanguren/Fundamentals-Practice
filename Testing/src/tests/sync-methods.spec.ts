import Hero, {
  getUser,
  largestOfFour,
  multiplyByX,
  createNewHero,
  SingletonConnection,
  Media,
} from "../logic/sync-methods";
import { IHero, IMovie, MovieGenres } from "../types/types";
const faker = require("faker");

describe("Test some random sync methods", () => {
  describe("method that multiplies every element (number) in an array by X value", () => {
    it("Should return an array of numbers multiplied by X number", () => {
      const array = [1, 2, 3, 4, 5];
      const multiplier = 2;
      const expected = [2, 4, 6, 8, 10];

      expect(multiplyByX(array, multiplier)).toEqual(expected);
    });

    it("Should skip an element if it doesn't fulfill the multiplier's condition", () => {
      const array = [1, 2, 3, true, ""];
      const multiplier = 2;
      const expected = [2, 4, 6];
      const expectedArrayLength = expected.length;

      const response = multiplyByX(array, multiplier);

      expect(response).toEqual(expected);
      expect(response.length).toEqual(expectedArrayLength);
    });
  });
  describe("Method that calculates the biggest numbers in X ammount of arrays and then return those as a flat array", () => {
    it("Should return an array of the biggest numbers in each array", () => {
      const values = [
        [5, 15, 80, 3],
        [5, 10, 3, 1],
        [1, 2, 3, 4, 5],
      ];
      const expected = [80, 10, 5];

      const response = largestOfFour(values);

      expect(response).toEqual(expect.any(Array));
      expect(response.length).toEqual(expected.length);
      expect(response).toEqual(expected);
    });
  });
  describe("Method that calls library and a native node module", () => {
    it("Should return an object composed of 4 key/values", () => {
      const response = getUser();

      expect(response).toEqual(expect.any(Object));
      expect(response).toHaveProperty("drinkingStatus");
      expect(response.drinkingStatus).toStrictEqual(expect.any(Boolean));
    });
  });
  describe("Hero Class", () => {
    const mockName = faker.name.firstName();
    const newHero = createNewHero(mockName);
    it("Should create and return a new object of the instance Hero", () => {
      const expected: IHero = {
        id: expect.any(String),
        name: mockName,
        level: 1,
        inventory: { items: [] },
      };

      expect(newHero).toBeInstanceOf(Hero);
      expect(newHero).toEqual(expected);
    });
    it("Should correctly retrieve the Hero's inventory", () => {
      const getHeroInventoryResponse = newHero.getInventory();

      expect(getHeroInventoryResponse).toHaveProperty("items");
      expect(getHeroInventoryResponse.items).toEqual([]);
    });
    it("Should correctly include new items to a Hero's inventory", () => {
      const mockItem = faker.commerce.product();
      newHero.includeInInventory = mockItem;
      const inventory = newHero.getInventory();

      expect(inventory).toHaveProperty("items");
      expect(inventory.items).toContain(mockItem);
    });
  });
  describe("SingletonConnection Class", () => {
    const instance1 = SingletonConnection.getInstance();
    it("Should return a singleton instance of the class", () => {
      const instance2 = SingletonConnection.getInstance();

      expect(instance1).toStrictEqual(instance2);
      expect(instance1).toBeInstanceOf(SingletonConnection);
      expect(SingletonConnection.url).toBe("http://localhost:3000");
    });
  });
  describe("Movie class", () => {
    const mockMediaData: IMovie[] = [
      {
        id: "mockId",
        name: "mockName",
        duration: 140,
        year: new Date(),
        genre: MovieGenres.SCI_FI,
        rating: 3,
      },
      {
        id: "mockId2",
        name: "mockName2",
        duration: 120,
        year: new Date(),
        genre: MovieGenres.HORROR,
        rating: 4,
      },
    ];
    const mediaInstance = new Media(mockMediaData);
    it("Should instantiate correctly", () => {
      expect(mediaInstance).toBeDefined();
      expect(mediaInstance).toBeInstanceOf(Media);
      expect(mediaInstance.movies).toBe(mockMediaData);
    });
    it("Should yield movies correctly", () => {
      const movie1 = mediaInstance.movie;

      expect(movie1.value).toEqual(mockMediaData[0]);
    });
  });
});
