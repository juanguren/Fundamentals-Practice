import { IArmor, IInventory, IWeapon } from './items-interface';

const firstWeapon: IWeapon = {
  id: 1,
  name: 'Sword',
  damage: 2,
  element: undefined,
};

const firstArmor: IArmor = {
  id: 1,
  name: 'Leather Armor',
  defense: 2,
  element: undefined,
};

const initialInventory: IInventory = {
  potion: [],
  weapon: [firstWeapon],
  armor: [firstArmor],
};

export { firstArmor, firstWeapon, initialInventory };
