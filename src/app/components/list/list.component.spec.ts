import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { AddNewListAction, CopyListAction, LoadAction, RemoveItemAction, RemoveListAction } from '../../actions/list.actions';

import { ListComponent } from './list.component';

@Component({
  template: `
    <app-list [searchText]="searchText" (addNewList)="onAddNewList()">
    </app-list>
  `
})
class TestListComponent {
  public searchText = 'some text';
  public newItem: any;

  public onAddNewList() {
    this.newItem = 'info';
  }
}

describe('ListComponent', () => {
  let mockStore: Store<any>;
  let storeSpy: jasmine.Spy;
  let component: ListComponent;
  let testComponent: TestListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let testFixture: ComponentFixture<TestListComponent>;
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
  const testItem = {
    item: {
      id: 11,
      title: 'Title1',
      description: 'sometext11',
      importanceFlag: false
    },
    list: {
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
        TestListComponent,
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
      providers: [
        provideMockStore({initialState}),
        {provide: Router, useValue: routerSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestListComponent);
    testComponent = testFixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      testFixture.detectChanges();
    });

    it('should create', () => {
      expect(testComponent).toBeTruthy();
    });

    it('should render "Add new list" button', () => {
      const buttonElement: DebugElement = testFixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.textContent).toContain('Add new list');
    });
  });

  describe('@Input and @Output', () => {
    beforeEach(() => {
      testFixture.detectChanges();
    });

    it('should display @Input info correctly', () => {
      expect(testComponent.searchText).toEqual('some text');
    });

    it('should trigger save event on form tag', () => {
      const buttonElement: DebugElement = testFixture.debugElement.query(By.css('.list-button'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.newItem).toEqual('info');
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should navigate to / before saveItem() call', () => {
      const location = TestBed.get(Location);
      expect(location.path()).toBe('');
    });

    it('should navigate to /edit on editItem() call', () => {
      component.editItem(testItem);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['edit', testItem.list.id, testItem.item.id]);
    });

    it('should navigate to /new on createItem() call', () => {
      component.createItem(initialState.tasks);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['new', initialState.tasks.id]);
    });

    it('should navigate to /editLabel on onLabelEdit() call', () => {
      component.onLabelEdit(initialState.tasks);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['editLabel', initialState.tasks.id]);
    });
  });

  describe('Lifecycle hooks', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      mockStore = fixture.debugElement.injector.get(Store);
      storeSpy = spyOn(mockStore, 'dispatch');
    });

    it('should call ngOnInit', () => {
      const spyOnNgOnInit: jasmine.Spy = spyOn(component, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
      expect(spyOnNgOnInit).toHaveBeenCalled();
      expect(storeSpy).toHaveBeenCalledWith(new LoadAction());
    });
  });

  describe('Redux work', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      mockStore = fixture.debugElement.injector.get(Store);
      storeSpy = spyOn(mockStore, 'dispatch');
    });

    it('should call removeItem()', () => {
      component.removeItem('');
      expect(storeSpy).toHaveBeenCalledTimes(1);
      expect(storeSpy).toHaveBeenCalledWith(new RemoveItemAction(''));
    });

    it('should call onListCopy()', () => {
      component.onListCopy(initialState.tasks);
      expect(storeSpy).toHaveBeenCalledTimes(1);
      expect(storeSpy).toHaveBeenCalledWith(new CopyListAction(initialState.tasks));
    });

    it('should call onListRemove()', () => {
      component.onListRemove(initialState.tasks);
      expect(storeSpy).toHaveBeenCalledTimes(1);
      expect(storeSpy).toHaveBeenCalledWith(new RemoveListAction(initialState.tasks));
    });

    it('should call onAddNewList()', () => {
      component.onAddNewList();
      expect(storeSpy).toHaveBeenCalledTimes(1);
      expect(storeSpy).toHaveBeenCalledWith(new AddNewListAction());
    });
  });
});
