import { IListOfItems } from '../models/listOfItems';

import * as listAction from './list.actions';

describe('ListActionTypes', () => {
  const initialItem: IListOfItems = {
    id: 1,
    listTitle: 'Label1',
    subList: [
      {
        id: 11,
        title: 'Title1',
        description: 'sometext11',
        importanceFlag: false
      }, {
        id: 12,
        title: 'Title2',
        description: 'sometext12',
        importanceFlag: true
      },
    ]
  };

  it('should create LoadAction', () => {
    const loadAction = listAction.LoadAction;
    const action = new loadAction();
    expect(action.type).toEqual(listAction.ListActionTypes.Load);
  });

  it('should create LoadCompleteAction', () => {
    const loadCompleteAction = listAction.LoadCompleteAction;
    const action = new loadCompleteAction('data');
    expect(action.payload).toBe('data');
    expect(action.type).toEqual(listAction.ListActionTypes.LoadComplete);
  });

  it('should create LoadFailedAction', () => {
    const loadFailedAction = listAction.LoadFailedAction;
    const action = new loadFailedAction('data');
    expect(action.payload).toBe('data');
    expect(action.type).toEqual(listAction.ListActionTypes.LoadFailed);
  });

  it('should create CreateItemAction', () => {
    const createItemAction = listAction.CreateItemAction;
    const action = new createItemAction(initialItem.subList[0], 1);
    expect(action.payload).toBe(initialItem.subList[0]);
    expect(action.route).toBe(1);
    expect(action.type).toEqual(listAction.ListActionTypes.CreateItem);
  });

  it('should create EditItemAction', () => {
    const editItemAction = listAction.EditItemAction;
    const action = new editItemAction(initialItem.subList[0], 1);
    expect(action.payload).toBe(initialItem.subList[0]);
    expect(action.route).toBe(1);
    expect(action.type).toEqual(listAction.ListActionTypes.EditItem);
  });

  it('should create RemoveItemAction', () => {
    const removeItemAction = listAction.RemoveItemAction;
    const action = new removeItemAction('data');
    expect(action.payload).toBe('data');
    expect(action.type).toEqual(listAction.ListActionTypes.RemoveItem);
  });

  it('should create EditLabelAction', () => {
    const editLabelAction = listAction.EditLabelAction;
    const action = new editLabelAction(initialItem);
    expect(action.payload).toBe(initialItem);
    expect(action.type).toEqual(listAction.ListActionTypes.EditLabel);
  });

  it('should create CopyListAction', () => {
    const copyListAction = listAction.CopyListAction;
    const action = new copyListAction(initialItem);
    expect(action.payload).toBe(initialItem);
    expect(action.type).toEqual(listAction.ListActionTypes.CopyList);
  });

  it('should create RemoveListAction', () => {
    const removeListAction = listAction.RemoveListAction;
    const action = new removeListAction(initialItem);
    expect(action.payload).toBe(initialItem);
    expect(action.type).toEqual(listAction.ListActionTypes.RemoveList);
  });

  it('should create AddNewListAction', () => {
    const addNewListAction = listAction.AddNewListAction;
    const action = new addNewListAction();
    expect(action.type).toEqual(listAction.ListActionTypes.AddNewList);
  });
});
