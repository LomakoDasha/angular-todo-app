import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getItemById } from 'src/app/reducers/list.reducer';
import { EditItemAction } from 'src/app/actions/list.actions';
import { IListState } from '../../models/listState';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {
  public item$ = this.store.pipe(
    select(getItemById, {id: Number(this.route.snapshot.params.id)})
  );

  constructor(private route: ActivatedRoute, private store: Store<IListState>, private router: Router) {
  }

  public editItem(item: IItem) {
    this.store.dispatch(new EditItemAction(item, Number(this.route.snapshot.params.list)));
    this.router.navigate(['/list']);
  }
}
