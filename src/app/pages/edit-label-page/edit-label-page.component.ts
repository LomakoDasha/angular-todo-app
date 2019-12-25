import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { getListById } from 'src/app/reducers/list.reducer';
import { EditLabelAction } from 'src/app/actions/list.actions';
import { ListState, ListOfItems } from 'src/app/models/toDoitem';

@Component({
  selector: 'app-edit-label-page',
  templateUrl: './edit-label-page.component.html',
  styleUrls: ['./edit-label-page.component.scss']
})
export class EditLabelPageComponent {
  public item$ = this.store.pipe(
    select(getListById, { id: Number(this.route.snapshot.params.id) })
  );

  constructor(private store: Store<ListState>, private router: Router, private route: ActivatedRoute) { }

  public editLabel(item: ListOfItems) {
    this.store.dispatch(new EditLabelAction(item));
    this.router.navigate(['/list']);
  }
}
