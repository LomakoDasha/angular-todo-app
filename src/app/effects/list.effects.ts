import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { switchMap, map, catchError, withLatestFrom, filter } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { ListActionTypes, LoadCompleteAction } from '../actions/list.actions';
import { ListService } from '../services/list.service';
import { getIsLoading } from '../reducers/list.reducer';
import { ListState } from '../models/toDoitem';

@Injectable()
export class ListEffects {
  @Effect()
  public load$ = this.actions$.pipe(
    ofType(ListActionTypes.Load),
    withLatestFrom(this.store.pipe(select(getIsLoading))),
    filter(([action, isLoading]) => isLoading),
    switchMap(
      () => this.listService.getItems().pipe(
        map((items) => new LoadCompleteAction(items)),
        catchError((error) => EMPTY)
      )
    ),
  );

  constructor(private actions$: Actions, private listService: ListService, private store: Store<ListState>) { }
}
