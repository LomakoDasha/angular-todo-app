import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IItem } from '../../../models/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public item: IItem;
  @Output() public remove = new EventEmitter<IItem>();
  @Output() public edit = new EventEmitter<IItem>();

  public onEdit() {
    this.edit.emit(this.item);
  }

  public onRemove() {
    this.remove.emit(this.item);
  }
}
