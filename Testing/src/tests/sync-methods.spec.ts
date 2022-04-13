import { multiplyByX } from "../logic/sync-methods";

describe("Test some random sync methods", () => {
  // Create a method that multiplies every element (number) in an array by X value
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
