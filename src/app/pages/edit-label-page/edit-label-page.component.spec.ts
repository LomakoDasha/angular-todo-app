import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EditLabelPageComponent } from './edit-label-page.component';

@Component({template: ''})
class DummyComponent {
}

describe('EditLabelPageComponent', () => {
  let component: EditLabelPageComponent;
  let fixture: ComponentFixture<EditLabelPageComponent>;
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
        EditLabelPageComponent,
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
            snapshot: {params: {id: '6958364683435'}}
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabelPageComponent);
    component = fixture.componentInstance;
    component.item$ = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Navigation', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should navigate to / before editLabel() call', () => {
      const location = TestBed.get(Location);
      expect(location.path()).toBe('');
    });

    it('should navigate to /list on editLabel() call', () => {
      component.editLabel(initialState.tasks);
      fixture.detectChanges();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/list']);
    });
  });
});
