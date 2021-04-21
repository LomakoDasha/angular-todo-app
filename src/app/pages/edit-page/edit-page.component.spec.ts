import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EditPageComponent } from './edit-page.component';
import { Location } from '@angular/common';

@Component({template: ''})
class DummyComponent {
}

describe('EditPageComponent', () => {
  let component: EditPageComponent;
  let fixture: ComponentFixture<EditPageComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};
  const item: Observable<any> = new Observable<any>();
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
        EditPageComponent,
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
            snapshot: {params: {id: '1544654465'}}
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageComponent);
    component = fixture.componentInstance;
    component.item$ = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Check routing work', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should navigate to / before editItem() call', () => {
      const location = TestBed.get(Location);
      expect(location.path()).toBe('');
    });

    it('should navigate to /list on editItem() call', () => {
      component.editItem(initialState.tasks.subList[0]);
      fixture.detectChanges();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/list']);
    });
  });
});
