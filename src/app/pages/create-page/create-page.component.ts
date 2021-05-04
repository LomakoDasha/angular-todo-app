import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateItemAction } from 'src/app/actions/list.actions';
import { IListState } from '../../models/listState';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent {

  constructor(private store: Store<IListState>, private router: Router, private route: ActivatedRoute) {
  }

  public saveItem(value: IItem) {
    this.store.dispatch(new CreateItemAction(value, Number(this.route.snapshot.params.id)));
    this.router.navigate(['/list']);
  }
}
