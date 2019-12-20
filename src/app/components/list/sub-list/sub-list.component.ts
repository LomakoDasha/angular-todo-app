import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/toDoitem';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent {
  @Input() public items: { id: number, subList: Item };
  @Input() public searchText: string;
  @Output() public remove = new EventEmitter<any>();
  @Output() public edit = new EventEmitter<any>();
  @Output() public create = new EventEmitter<any>();

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
    console.log('onCreate', this.items)
    this.create.emit(this.items);
  }
}
