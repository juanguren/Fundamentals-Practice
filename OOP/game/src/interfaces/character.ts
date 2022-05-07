export interface ICharacter {
  name: string;
  health: number;
  level: number;
  attack(target: ICharacter | any): void;
  defend(damage: number): void;
  heal(amount: number): void;
  isAlive(): boolean;
}
