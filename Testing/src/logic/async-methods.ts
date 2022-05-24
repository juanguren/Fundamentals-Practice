import axios from "axios";

const asyncMethod = (resolved: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolved) resolve("Hello World");
      reject("Error");
    }, 1000);
  });
};

export type IItem = {
  element: Element;
  id: string | number;
};

type Element = "people" | "starships" | "planets";

const swapiGet = async (item: IItem) => {
  const { element, id } = item;
  const response = await axios.get(`https://swapi.dev/api/${element}/${id}`);

  return response.data;
};

const getFilms = async () => {
  const filmPromises = [];
  const filmStack: object[] = [];
  const planetObject: IItem = {
    element: "planets",
    id: "5",
  };
  const filmResponse = await swapiGet(planetObject);

  for (const filmPromise of filmResponse.films) {
    const promises = axios.get(filmPromise);
    filmPromises.push(promises);
  }

  const resolved = await Promise.all(filmPromises);
  resolved.forEach((item) => filmStack.push(item.data));

  return filmStack;
};

export { asyncMethod, swapiGet, getFilms };
