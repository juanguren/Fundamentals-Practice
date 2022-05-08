import { ElementType } from '../../interfaces/element.interface';

export interface IInventory {
  potion: IPotion[];
  weapon: IWeapon[];
  armor: IArmor[];
}

export interface IPotion {
  id: number;
  name: string;
  healingFactor: number;
}
export interface IWeapon {
  id: number;
  name: string;
  damage: number;
  element: ElementType | undefined;
}
export interface IArmor {
  id: number;
  name: string;
  defense: number;
  element: ElementType | undefined;
}
