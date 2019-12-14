import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ListState, getLists, getIsLoading } from 'src/app/reducers/list.reducer';
import { LoadAction, RemoveItemAction } from 'src/app/actions/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public searchText: string;
  public items$: Observable<any>;
  public isLoading$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<ListState>
  ) { }

  public ngOnInit(): void {
    this.items$ = this.store.pipe(select(getLists));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.store.dispatch(new LoadAction());
  }

  public editItem(item: any) {
    this.router.navigate(['edit', item.id]);
  }

  public removeItem(args) {
    this.store.dispatch(new RemoveItemAction(args));
  }
}
