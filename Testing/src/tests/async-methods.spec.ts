import { asyncMethod } from "../logic/async-methods";

describe("Test some random async methods", () => {
  it("should return a promise", () => {
    const result = asyncMethod(true);
    expect(result).toBeInstanceOf(Promise);
  });
  it("should return a promise that resolves to a string", async () => {
    const result = await asyncMethod(true);
    expect(result).toBe("Hello World");
  });
  it("Should reject with Error", async () => {
    try {
      await asyncMethod(false);
    } catch (error) {
      expect(error).toBe("Error");
    }
  });
});
