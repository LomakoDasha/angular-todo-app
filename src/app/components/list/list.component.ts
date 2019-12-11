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
      subList: [
        {title: 'Title1'}, {title: 'Title2'}
      ]
    },
    {
      id: 2,
      subList: [
        {title: 'Title3'}, {title: 'Title4'}
      ]
    },{
      id: 3,
      subList: [
        {title: 'Title5'}, {title: 'Title6'}
      ]
    }
  ];

  public removeItem({list, item}) {
    const index = list.findIndex(existingItem => existingItem.title === item.title);
    list.splice(index, 1);
  }
}
