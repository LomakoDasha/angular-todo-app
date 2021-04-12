import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CreatePageComponent } from './create-page.component';

describe('CreatePageComponent', () => {
  let component: CreatePageComponent;
  let fixture: ComponentFixture<CreatePageComponent>;
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
  class DummyComponent {
  }

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
      providers: [provideMockStore({initialState})],
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

  it('should navigate to / before saveItem() call', () => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });
});
