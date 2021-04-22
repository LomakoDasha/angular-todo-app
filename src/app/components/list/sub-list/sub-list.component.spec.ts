import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatCardModule, MatIconModule } from '@angular/material';
import { ListItemComponent } from '../list-item/list-item.component';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { IListOfItems } from '../../../models/listOfItems';

import { SubListComponent } from './sub-list.component';

@Component({
  template: `
    <app-sub-list
      [items]="item"
      [searchText]="searchText"
      (edit)="onEdit()"
      (remove)="onRemove()"
      (create)="onCreate()"
      (labelEdit)="onLabelEdit()"
      (listCopy)="onListCopy()"
      (listRemove)="onListRemove()">
    </app-sub-list>
  `
})
class TestSubListComponent {
  public item: IListOfItems = {
    id: 1,
    listTitle: 'List title',
    subList: [{id: 11, title: 'Title', description: 'some text', importanceFlag: false}]
  };
  public searchText = 'some text';
  public editItem: any;
  public removeItem: any;
  public createItem: any;
  public labelEditItem: any;
  public listCopyItem: any;
  public listRemoveItem: any;

  public onEdit() {
    this.editItem = 'Edit item';
  }

  public onRemove() {
    this.removeItem = 'Remove item';
  }

  public onCreate() {
    this.createItem = 'Create item';
  }

  public onLabelEdit() {
    this.labelEditItem = 'Edit label';
  }

  public onListCopy() {
    this.listCopyItem = 'Copy list';
  }

  public onListRemove() {
    this.listRemoveItem = 'Delete list';
  }
}

describe('SubListComponent', () => {
  let testComponent: TestSubListComponent;
  let fixture: ComponentFixture<TestSubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubListComponent, TestSubListComponent, ListItemComponent, FilterPipe],
      imports: [MatCardModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSubListComponent);
    testComponent = fixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(testComponent).toBeTruthy();
    });

    it('should render three buttons in the label of list', () => {
      const buttonsElement: DebugElement[] = fixture.debugElement.queryAll(By.css('.label-button'));
      expect(buttonsElement.length).toBe(3);
    });

    it('should render first button with "edit" value', () => {
      const buttonsElement: DebugElement[] = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[0].nativeElement.textContent).toContain('edit');
    });

    it('should render second button with "file_copy" value', () => {
      const buttonsElement: DebugElement[] = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[1].nativeElement.textContent).toContain('file_copy');
    });

    it('should render third button with "delete" value', () => {
      const buttonsElement: DebugElement[] = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[2].nativeElement.textContent).toContain('delete');
    });

    it('should render "Create" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('.create-button'));
      expect(buttonElement.nativeElement.textContent).toContain('Create');
    });
  });

  describe('@Input and @Output', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should contain appropriate listTitle in h2 tag', () => {
      const h2Element: DebugElement = fixture.debugElement.query(By.css('.title-label'));
      expect(h2Element.nativeElement.textContent).toContain(testComponent.item.listTitle.toUpperCase());
    });

    it('should trigger edit event on app-list-item tag', () => {
      const element: DebugElement = fixture.debugElement.query(By.css('app-list-item'));
      element.triggerEventHandler('edit', null);
      expect(testComponent.editItem).toEqual('Edit item');
    });

    it('should trigger remove event on app-list-item tag', () => {
      const element: DebugElement = fixture.debugElement.query(By.css('app-list-item'));
      element.triggerEventHandler('remove', null);
      expect(testComponent.removeItem).toEqual('Remove item');
    });

    it('should trigger click event on "Edit label of the list" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('.label-edit-btn'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.labelEditItem).toEqual('Edit label');
    });

    it('should trigger click event on "Duplicate list" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('.list-copy-btn'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.listCopyItem).toEqual('Copy list');
    });

    it('should trigger click event on "Delete list" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('.list-remove-btn'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.listRemoveItem).toEqual('Delete list');
    });

    it('should trigger click event on "Create" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('.create-button'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.createItem).toEqual('Create item');
    });
  });
});
