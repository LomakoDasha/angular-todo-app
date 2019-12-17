import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListAction, ListActionTypes } from '../actions/list.actions';

export interface ListState {
  lists: Array<{
    id: number,
    subList: Array<{
      id: number,
      title: string
    }>
  }>;
  isLoading?: boolean;
}

export const initialState: ListState = {
  lists: [],
};

export function reducer(
  state: ListState = initialState,
  action: ListAction
) {
  switch (action.type) {
    case ListActionTypes.Load: {
      return !state.lists.length
        ? {
          ...state,
          isLoading: true
        }
        : state;
    }

    case ListActionTypes.LoadComplete: {
      return {
        lists: action.payload,
        isLoading: false
      };
    }

    case ListActionTypes.RemoveItem: {
      const { list, item } = action.payload;

      return {
        ...state,
        lists: state.lists.map(
          (column) => column.id === list.id
            ? { ...column, subList: column.subList.filter((currentItem) => currentItem.id !== item.id) }
            : column
        )
      };
    }

    case ListActionTypes.CreateItem: {
      return {
        ...state,
        lists: state.lists.map(
          (list, index) => index === 0
            ? { ...list, subList: [...list.subList].concat(action.payload) }
            : list
        )
      };
    }

    case ListActionTypes.EditItem: {
      const { payload } = action;

      return {
        ...state,
        lists: state.lists.map(
          (list, index) => list.subList.some((item) => item.id === payload.id)
            ? {
              ...list,
              subList: list.subList.map(
                (item) => item.id === payload.id
                  ? { ...item, ...payload }
                  : item
              )
            }
            : list
        )
      };
    }

    default: {
      return state;
    }
  }
}

export const getListState = createFeatureSelector<ListState>('tasks');

export const getLists = createSelector(
  getListState,
  (state) => state.lists
);

export const getIsLoading = createSelector(
  getListState,
  (state) => state.isLoading
);

export const getItemById = createSelector(
  getLists,
  (lists, { id }) => {
    for (const list of lists) {
      for (const item of list.subList) {
        if (item.id === id) {
          return item;
        }
      }
    }
  }
);
