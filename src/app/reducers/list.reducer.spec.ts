import * as fromActions from '../actions/list.actions';

import * as fromReducer from './list.reducer';

describe('ListReducer', () => {
  it('should return the default state', () => {
    const {initialState} = fromReducer;
    const action = {};
    const state = fromReducer.reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('Load action (isLoading === true)', () => {
    const initialState = {
      lists: [],
      isLoading: true
    };
    const action = new fromActions.LoadAction();
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(initialState.lists);
    expect(state.isLoading).toEqual(initialState.isLoading);
  });

  it('Load action (isLoading === false)', () => {
    const initialState = {
      lists: [
        {
          id: 145,
          listTitle: 'text',
          subList: []
        }
      ],
      isLoading: false
    };
    const action = new fromActions.LoadAction();
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(initialState.lists);
    expect(state.isLoading).toEqual(initialState.isLoading);
  });

  it('LoadComplete action', () => {
    const initialState = {
      lists: [
        {
          id: 145,
          listTitle: 'text',
          subList: []
        }
      ],
      isLoading: false
    };
    const result = {
      lists: {
        lists: [
          {
            id: 145,
            listTitle: 'text',
            subList: []
          }
        ],
        isLoading: false
      },
      isLoading: false
    };
    const action = new fromActions.LoadCompleteAction(initialState);
    const state = fromReducer.reducer(initialState, action);
    expect(state.isLoading).toEqual(result.isLoading);
  });

  it('CreateItem action', () => {
    const initialState = {
      lists: [
        {
          id: 145,
          listTitle: 'text',
          subList: []
        }
      ],
      isLoading: false
    };
    const payload = {
      id: 23,
      title: 'Title',
      description: 'text',
      importanceFlag: false
    };
    const route = 111;
    const action = new fromActions.CreateItemAction(payload, route);
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(initialState.lists);
  });

  it('EditItem action', () => {
    const initialState = {
      lists: [
        {
          id: 145,
          listTitle: 'text',
          subList: []
        }
      ],
      isLoading: false
    };
    const payload = {
      id: 23,
      title: 'Title',
      description: 'text',
      importanceFlag: false
    };
    const route = 111;
    const action = new fromActions.EditItemAction(payload, route);
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(initialState.lists);
  });

  it('RemoveItem action', () => {
    const {initialState} = fromReducer;
    const payload = {
      lists: {
        id: 1,
        listTitle: 'Label1',
        subList: [
          {
            id: 23,
            title: 'Title',
            description: 'text',
            importanceFlag: false
          }, {
            id: 12,
            title: 'Title2',
            description: 'sometext12',
            importanceFlag: true
          },
        ]
      },
      item: {
        id: 23,
        title: 'Title',
        description: 'text',
        importanceFlag: false
      }
    };
    const action = new fromActions.RemoveItemAction(payload);
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(initialState.lists);
  });

  it('EditLabel action', () => {
    const {initialState} = fromReducer;
    const payload = {
      id: 145,
      listTitle: 'text',
      subList: []
    };
    const action = new fromActions.EditLabelAction(payload);
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(initialState.lists);
  });

  it('CopyList action', () => {
    const {initialState} = fromReducer;
    const payload = {
      id: 145,
      listTitle: 'text',
      subList: []
    };
    const newItem = Object.assign({}, payload);
    newItem.id = initialState.lists.length + 1;
    const newItemList = {
      lists: [newItem]
    };
    const action = new fromActions.CopyListAction(payload);
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(newItemList.lists);
  });

  it('RemoveList action', () => {
    const {initialState} = fromReducer;
    const payload = {
      id: 145,
      listTitle: 'text',
      subList: []
    };
    const action = new fromActions.RemoveListAction(payload);
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(initialState.lists);
  });

  it('AddNewList action', () => {
    const {initialState} = fromReducer;
    const newItem = {
      id: initialState.lists.length + 1,
      listTitle: 'New list',
      subList: []
    };
    const newItemList = {
      lists: [newItem]
    };
    const action = new fromActions.AddNewListAction();
    const state = fromReducer.reducer(initialState, action);
    expect(state.lists).toEqual(newItemList.lists);
  });
});
