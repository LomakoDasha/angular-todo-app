import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private items = [
    {
      id: 1,
      subList: [
        {
          id: 11,
          title: 'Title1',
          description: 'sometext11'
        }, {
          id: 12,
          title: 'Title2',
          description: 'sometext12'
        },
      ]
    },
    {
      id: 2,
      subList: [
        {
          id: 21,
          title: 'Title3',
          description: 'sometext21'
        }, {
          id: 22,
          title: 'Title4',
          description: 'sometext22'
        },
      ]
    },
    {
      id: 3,
      subList: [
        {
          id: 31,
          title: 'Title5',
          description: 'sometext31'
        }, {
          id: 32,
          title: 'Title6',
          description: 'sometext32'
        },
      ]
    },
  ];

  public getItems() {
    return of(this.items).pipe(delay(2000));
  }
}
