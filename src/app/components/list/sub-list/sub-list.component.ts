import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item, ListOfItems } from 'src/app/models/toDoitem';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent {
  @Input() public items: ListOfItems;
  @Input() public searchText: string;
  @Output() public remove = new EventEmitter<any>();
  @Output() public edit = new EventEmitter<any>();
  @Output() public create = new EventEmitter<any>();
  @Output() public labelEdit = new EventEmitter<any>();
  @Output() public listCopy = new EventEmitter<any>();
  @Output() public listRemove = new EventEmitter<any>();

  onRemove(item: Item) {
    this.remove.emit({
      list: this.items,
      item
    });
  }

  onEdit(item: Item) {
    this.edit.emit(item);
  }

  public onCreate() {
    this.create.emit(this.items);
  }

  public onLabelEdit() {
    this.labelEdit.emit(this.items);
  }

  public onListCopy() {
    this.listCopy.emit(this.items);
  }

  public onListRemove() {
    this.listRemove.emit(this.items);
  }
}
