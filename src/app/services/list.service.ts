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
          title: 'Title1'
        }, {
          id: 12,
          title: 'Title2'
        },
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
        },
      ]
    },
    {
      id: 3,
      subList: [
        {
          id: 31,
          title: 'Title5'
        }, {
          id: 32,
          title: 'Title6'
        },
      ]
    },
  ];

  public getItems() {
    return of(this.items).pipe(delay(2000));
  }
}
