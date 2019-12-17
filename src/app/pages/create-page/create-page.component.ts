import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { ListState } from 'src/app/reducers/list.reducer';
import { CreateItemAction } from 'src/app/actions/list.actions';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  constructor(private store: Store<ListState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public saveItem(value: any) {
    this.store.dispatch(new CreateItemAction(value));
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
