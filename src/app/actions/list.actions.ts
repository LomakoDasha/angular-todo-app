import { Action } from '@ngrx/store';
import { ListOfItems, Item } from '../models/toDoitem';

export enum ListActionTypes {
  Load = '[List] Load',
  LoadComplete = '[List] Load complete',
  LoadFailed = '[List] Load failed',
  RemoveItem = '[List] Remove item',
  CreateItem = '[List] Create item',
  EditItem = '[List] Edit item',
  EditLabel = '[List] Edit list label'
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

  constructor(public payload: Item, public route: number) { }
}

export class EditItemAction implements Action {
  public readonly type = ListActionTypes.EditItem;

  constructor(public payload: Item) { }
}

export class RemoveItemAction implements Action {
  public readonly type = ListActionTypes.RemoveItem;

  constructor(public payload: any) { }
}

export class EditLabelAction implements Action {
  public readonly type = ListActionTypes.EditLabel;

  constructor(public payload: ListOfItems) { }
}

export type ListAction =
  | LoadAction
  | LoadCompleteAction
  | LoadFailedAction
  | RemoveItemAction
  | CreateItemAction
  | EditItemAction
  | EditLabelAction;
