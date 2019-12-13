import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent {
  @Input() public items: any[];
  @Input() public searchText: string;
  @Output() public remove = new EventEmitter<any>();
  @Output() public edit = new EventEmitter<any>();

  onRemove(item: any) {
    this.remove.emit({
      list: this.items,
      item
    });
  }

  onEdit(item: any) {
    this.edit.emit(item);
  }
}
