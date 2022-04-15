import { getUser, largestOfFour, multiplyByX } from "../logic/sync-methods";
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
});
