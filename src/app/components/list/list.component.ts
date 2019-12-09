import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public searchText: string;
  public readonly items = [
    {
      id: 1,
      title: 'Title1'
    },
    {
      id: 2,
      title: 'Title2'
    },{
      id: 3,
      title: 'Title3'
    }
  ];

  public removeItem(item: any) {
    const index = this.items.findIndex(existingItem => existingItem.id === item.id);
    this.items.splice(index, 1);
  }
}
