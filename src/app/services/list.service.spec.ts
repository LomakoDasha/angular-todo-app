import { async, TestBed } from '@angular/core/testing';
import { IListOfItems } from '../models/listOfItems';

import { ListService } from './list.service';

describe('ListService', () => {
  let service: ListService;
  const items = [
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ListService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getItems()', () => {
    return service.getItems().toPromise().then((result: IListOfItems[]) => {
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual(items);
    });
  });
});
