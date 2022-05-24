import { asyncMethod, getFilms, IItem, swapiGet } from "../logic/async-methods";

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

describe("Test external API calls", () => {
  it("Should return data", async () => {
    const mockItemObject: IItem = {
      element: "planets",
      id: "2",
    };
    const response = await swapiGet(mockItemObject);

    expect(response).toBeDefined();
    expect(response).toHaveProperty("name");
  });
  it("Should retrieve all of the films as solved promises", async () => {
    const films = await getFilms();

    expect(films.length).toBeGreaterThan(0);
    for (const film of films) {
      expect(film).toHaveProperty("opening_crawl");
    }
  });
});
