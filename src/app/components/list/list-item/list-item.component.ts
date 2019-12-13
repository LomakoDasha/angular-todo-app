import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public item: any;
  @Output() public remove = new EventEmitter<any>();
  @Output() public edit = new EventEmitter<any>();

  public onEdit() {
    this.edit.emit(this.item);
  }

  public onRemove() {
    this.remove.emit(this.item);
  }
}
