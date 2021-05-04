import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { CreateItemAction } from '../../actions/list.actions';

import { CreatePageComponent } from './create-page.component';

@Component({template: ''})
class DummyComponent {
}

describe('CreatePageComponent', () => {
  let mockStore: Store<any>;
  let storeSpy: jasmine.Spy;
  const activeRouteInfo = {id: '26546854168478'};
  let component: CreatePageComponent;
  let fixture: ComponentFixture<CreatePageComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};
  const initialState = {
    tasks: {
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
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreatePageComponent,
        DummyComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'list', component: DummyComponent}
          ]
        )
      ],
      providers: [
        provideMockStore({initialState}),
        {provide: Router, useValue: routerSpy},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: activeRouteInfo}
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Navigation', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should navigate to / before saveItem() call', () => {
      const location = TestBed.get(Location);
      expect(location.path()).toBe('');
    });

    it('should navigate to /list on saveItem() call', () => {
      component.saveItem(initialState.tasks.subList[0]);
      fixture.detectChanges();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/list']);
    });
  });

  describe('Redux work', () => {
    beforeEach(() => {
      mockStore = fixture.debugElement.injector.get(Store);
      storeSpy = spyOn(mockStore, 'dispatch');
    });

    it('should call saveItem()', () => {
      component.saveItem(initialState.tasks.subList[0]);
      expect(storeSpy).toHaveBeenCalledTimes(1);
      expect(storeSpy).toHaveBeenCalledWith(new CreateItemAction(initialState.tasks.subList[0], Number(activeRouteInfo.id)));
    });
  });
});
