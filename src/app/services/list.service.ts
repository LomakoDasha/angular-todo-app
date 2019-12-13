import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public readonly items = [
    {
      id: 1,
      subList: [
        {
          id: 11,
          title: 'Title1'
        }, {
          id: 12,
          title: 'Title2'
        }
      ]
    },
    {
      id: 2,
      subList: [
        {
          id: 21,
          title: 'Title3'
        }, {
          id: 22,
          title: 'Title4'
        }
      ]
    }, {
      id: 3,
      subList: [
        {
          id: 31,
          title: 'Title5'
        }, {
          id: 32,
          title: 'Title6'
        }
      ]
    }
  ];

  public getItemById(id: number) {
    for (const list of this.items) {
      for (const item of list.subList) {
        if (item.id === id) {
          return item;
        }
      }
    }
  }

  public removeItem({ list, item }) {
    const index = list.findIndex(existingItem => existingItem.title === item.title);
    list.splice(index, 1);
  }
}
