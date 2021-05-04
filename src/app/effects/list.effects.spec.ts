import { Store } from '@ngrx/store';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { ListService } from '../services/list.service';
import { IListState } from '../models/listState';

import { ListEffects } from './list.effects';

describe('ListEffects', () => {
  let listService: jasmine.SpyObj<ListService>;
  let store: jasmine.SpyObj<Store<IListState>>;

  beforeEach(() => {
    listService = jasmine.createSpyObj('ListService', ['setItem']);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  describe('persistTodos', () => {
    it('should not dispatch any action', () => {
      const actions$ = new Actions();
      const effect = new ListEffects(actions$, listService, store);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.load$.dispatch).toEqual(true);
    });
  });
});
