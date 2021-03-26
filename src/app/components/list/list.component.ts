import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getLists, getIsLoading } from 'src/app/reducers/list.reducer';
import { LoadAction, RemoveItemAction, RemoveListAction, CopyListAction, AddNewListAction } from 'src/app/actions/list.actions';
import { ListState, ListOfItems } from 'src/app/models/toDoitem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public searchText: string;
  @Output() public addNewList = new EventEmitter<any>();
  public items$: Observable<any>;
  public isLoading$: Observable<boolean>;

  constructor(private router: Router,
              private store: Store<ListState>) {
  }

  public ngOnInit(): void {
    this.items$ = this.store.pipe(select(getLists));
    this.isLoading$ = this.store.pipe(select(getIsLoading));
    this.store.dispatch(new LoadAction());
  }

  public editItem(args) {
    const {list, item} = args;
    this.router.navigate(['edit', list.id, item.id]);
  }

  public removeItem(args) {
    this.store.dispatch(new RemoveItemAction(args));
  }

  public createItem(item: ListOfItems) {
    this.router.navigate(['new', item.id]);
  }

  public onLabelEdit(item: ListOfItems) {
    this.router.navigate(['editLabel', item.id]);
  }

  public onListCopy(item: ListOfItems) {
    this.store.dispatch(new CopyListAction(item));
  }

  public onListRemove(item: ListOfItems) {
    this.store.dispatch(new RemoveListAction(item));
  }

  public onAddNewList() {
    this.addNewList.emit(this.items$);
    this.store.dispatch(new AddNewListAction());
  }
}
