export class Character {
  constructor(
    public name: string,
    public health: number = 100,
    public level: number = 1,
  ) {
    this.name = name;
  }
}
