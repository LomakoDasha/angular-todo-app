import { Action } from '@ngrx/store';
import { IListOfItems } from '../models/listOfItems';
import { IItem } from '../models/item';

export enum ListActionTypes {
  Load = '[List] Load',
  LoadComplete = '[List] Load complete',
  LoadFailed = '[List] Load failed',
  RemoveItem = '[List] Remove item',
  CreateItem = '[List] Create item',
  EditItem = '[List] Edit item',
  EditLabel = '[List] Edit list label',
  CopyList = '[List] Copy list',
  RemoveList = '[List] Remove list',
  AddNewList = '[List] Add new list'
}

export class LoadAction implements Action {
  public readonly type = ListActionTypes.Load;
}

export class LoadCompleteAction implements Action {
  public readonly type = ListActionTypes.LoadComplete;

  constructor(public payload: any) { }
}

export class LoadFailedAction implements Action {
  public readonly type = ListActionTypes.LoadFailed;

  constructor(public payload: string) { }
}

export class CreateItemAction implements Action {
  public readonly type = ListActionTypes.CreateItem;

  constructor(public payload: IItem, public route: number) { }
}

export class EditItemAction implements Action {
  public readonly type = ListActionTypes.EditItem;

  constructor(public payload: IItem, public route: number) { }
}

export class RemoveItemAction implements Action {
  public readonly type = ListActionTypes.RemoveItem;

  constructor(public payload: any) { }
}

export class EditLabelAction implements Action {
  public readonly type = ListActionTypes.EditLabel;

  constructor(public payload: IListOfItems) { }
}

export class CopyListAction implements Action {
  public readonly type = ListActionTypes.CopyList;

  constructor(public payload: IListOfItems) { }
}

export class RemoveListAction implements Action {
  public readonly type = ListActionTypes.RemoveList;

  constructor(public payload: IListOfItems) { }
}

export class AddNewListAction implements Action {
  public readonly type = ListActionTypes.AddNewList;
}

export type ListAction =
  | LoadAction
  | LoadCompleteAction
  | LoadFailedAction
  | RemoveItemAction
  | CreateItemAction
  | EditItemAction
  | EditLabelAction
  | CopyListAction
  | RemoveListAction
  | AddNewListAction;
