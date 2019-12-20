import { Action } from '@ngrx/store';

export enum ListActionTypes {
  Load = '[List] Load',
  LoadComplete = '[List] Load complete',
  LoadFailed = '[List] Load failed',
  RemoveItem = '[List] Remove item',
  CreateItem = '[List] Create item',
  EditItem = '[List] Edit item'
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

  constructor(public payload: any, public route: number) { }
}

export class EditItemAction implements Action {
  public readonly type = ListActionTypes.EditItem;

  constructor(public payload: any) { }
}

export class RemoveItemAction implements Action {
  public readonly type = ListActionTypes.RemoveItem;

  constructor(public payload: any) { }
}

export type ListAction =
  | LoadAction
  | LoadCompleteAction
  | LoadFailedAction
  | RemoveItemAction
  | CreateItemAction
  | EditItemAction;
