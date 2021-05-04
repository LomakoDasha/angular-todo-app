import { IItem } from './item';

export interface IListOfItems {
  id: number;
  listTitle: string;
  subList: Array<IItem>;
}
