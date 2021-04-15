import { IListOfItems } from './listOfItems';

export interface IListState {
  lists: Array<IListOfItems>;
  isLoading?: boolean;
}
