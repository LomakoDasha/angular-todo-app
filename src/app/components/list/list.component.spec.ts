import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
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

  @Component({template: ''})
  class DummyComponent1 {
  }

  @Component({template: ''})
  class DummyComponent2 {
  }

  @Component({template: ''})
  class DummyComponent3 {
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        DummyComponent1,
        DummyComponent2,
        DummyComponent3
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'new/:id', component: DummyComponent1},
            {path: 'edit/:list/:id', component: DummyComponent2},
            {path: 'editLabel/:id', component: DummyComponent3},
          ]
        )
      ],
      providers: [provideMockStore({initialState})],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Add new list" button', () => {
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.textContent).toContain('Add new list');
    });
  });

  it('should have navigate to / before saveItem() call', () => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });
});
