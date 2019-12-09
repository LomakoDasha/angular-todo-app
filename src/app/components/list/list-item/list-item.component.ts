import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() public item: any;
  @Output() public remove = new EventEmitter<any>();

  public onRemove() {
    this.remove.emit(this.item);
  }
}
