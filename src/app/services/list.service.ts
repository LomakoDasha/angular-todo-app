import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IListOfItems } from '../models/listOfItems';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private items: IListOfItems[] = [
    {
      id: 1,
      listTitle: 'Label1',
      subList: [
        {
          id: 11,
          title: 'Title1',
          description: 'sometext11',
          importanceFlag: false
        }, {
          id: 12,
          title: 'Title2',
          description: 'sometext12',
          importanceFlag: true
        },
      ]
    },
    {
      id: 2,
      listTitle: 'Label2',
      subList: [
        {
          id: 21,
          title: 'Title3',
          description: 'sometext21',
          importanceFlag: false
        }, {
          id: 22,
          title: 'Title4',
          description: 'sometext22',
          importanceFlag: false
        },
      ]
    },
    {
      id: 3,
      listTitle: 'Label3',
      subList: [
        {
          id: 31,
          title: 'Title5',
          description: 'sometext31',
          importanceFlag: true
        }, {
          id: 32,
          title: 'Title6',
          description: 'sometext32',
          importanceFlag: true
        },
      ]
    },
  ];

  public getItems(): Observable<IListOfItems[]> {
    return of(this.items).pipe(delay(2000));
  }
}
