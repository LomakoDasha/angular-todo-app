import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { ListState } from 'src/app/reducers/list.reducer';
import { CreateItemAction } from 'src/app/actions/list.actions';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent {
  public titleOfPage: string = 'Here you can create new ToDo item';

  constructor(private store: Store<ListState>, private router: Router, private route: ActivatedRoute) { }

  public saveItem(value: any) {
    this.store.dispatch(new CreateItemAction(value));
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
