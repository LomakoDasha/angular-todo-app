import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Item } from 'src/app/models/toDoitem';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public item: Item;
  @Output() public remove = new EventEmitter<Item>();
  @Output() public edit = new EventEmitter<Item>();

  public onEdit() {
    this.edit.emit(this.item);
  }

  public onRemove() {
    this.remove.emit(this.item);
  }
}
