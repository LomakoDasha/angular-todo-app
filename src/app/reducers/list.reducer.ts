import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ListAction, ListActionTypes } from '../actions/list.actions';
import { ListState } from '../models/toDoitem';

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

    case ListActionTypes.CreateItem: {
      const { payload, route } = action;

      return {
        ...state,
        lists: state.lists.map(

          (list, index) => index === route - 1
            ? { ...list, subList: [...list.subList].concat(payload) }
            : list
        )
      };
    }

    case ListActionTypes.EditItem: {
      const { payload } = action;

      return {
        ...state,
        lists: state.lists.map(
          (list) => list.subList.some((item) => item.id === payload.id)
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

    case ListActionTypes.EditLabel: {
      const { payload } = action;

      return {
        ...state,
        lists: state.lists.map(
          (list) => list.id === payload.id
            ? { ...list, ...payload }
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

export const getListById = createSelector(
  getLists,
  (lists, { id }) => {
    for (const list of lists) {
      if (list.id === id) {
        return list;
      }
    }
  }
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
