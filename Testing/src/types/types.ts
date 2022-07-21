export interface IUser {
  name: string;
  age: number;
  ssn: string;
  drinkingStatus: boolean;
}

export interface IHero {
  id: string;
  name: string;
  level: number;
  inventory: any;
}

export enum MovieGenres {
  ACTION = "action",
  HORROR = "horror",
  SCI_FI = "sci_fi",
}

export interface IMovie {
  name: string;
  duration: number;
  id: string;
  dateOfRelease: Date;
  genre: MovieGenres;
}
