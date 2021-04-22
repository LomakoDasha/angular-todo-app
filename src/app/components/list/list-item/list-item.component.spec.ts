import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatCardModule, MatIconModule } from '@angular/material';
import { IItem } from '../../../models/item';

import { ListItemComponent } from './list-item.component';

@Component({
  template: `
    <app-list-item [item]="item" (edit)="onEdit()" (remove)="onRemove()">
    </app-list-item>
  `
})
class TestListItemComponent {
  public item: IItem = {id: 11, title: 'Title', description: 'some text', importanceFlag: false};
  public updatedItem: IItem = {id: 11, title: 'updated title', description: 'new', importanceFlag: true};
  public editItem: any;
  public removeItem: any;

  public onEdit() {
    this.editItem = this.updatedItem;
  }

  public onRemove() {
    this.removeItem = null;
  }
}

describe('ListItemComponent', () => {
  let testComponent: TestListItemComponent;
  let fixture: ComponentFixture<TestListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent, TestListItemComponent],
      imports: [MatCardModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListItemComponent);
    testComponent = fixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(testComponent).toBeTruthy();
    });

    it('should render two buttons', () => {
      const buttonsElement: DebugElement[] = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement.length).toBe(2);
    });

    it('should render first button with "Edit" value', () => {
      const buttonsElement: DebugElement[] = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[0].nativeElement.textContent).toContain('Edit');
    });

    it('should render second button with "Delete" value', () => {
      const buttonsElement: DebugElement[] = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[1].nativeElement.textContent).toContain('Delete');
    });
  });

  describe('@Input and @Output', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should contain appropriate title in h3 tag', () => {
      const h3Element: DebugElement = fixture.debugElement.query(By.css('.item-title'));
      expect(h3Element.nativeElement.textContent).toContain(testComponent.item.title);
    });

    it('should contain appropriate description in p tag', () => {
      const pElement: DebugElement = fixture.debugElement.query(By.css('.item-description'));
      expect(pElement.nativeElement.textContent).toContain(testComponent.item.description);
    });

    it('should display mat-icon if importanceFlag === true', () => {
      testComponent.item.importanceFlag = true;
      fixture.detectChanges();
      const iconElement: DebugElement[] = fixture.debugElement.queryAll(By.css('.importance-flag'));
      expect(iconElement.length).toBe(1);
    });

    it('should display mat-icon if importanceFlag === false', () => {
      testComponent.item.importanceFlag = false;
      fixture.detectChanges();
      const iconElement: DebugElement[] = fixture.debugElement.queryAll(By.css('.importance-flag'));
      expect(iconElement.length).toBe(0);
    });

    it('should trigger click event on "Edit" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('.edit-btn'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.editItem).toEqual(testComponent.updatedItem);
    });

    it('should trigger click event on "Delete" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('.remove-btn'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.removeItem).toBeNull();
    });
  });
});
