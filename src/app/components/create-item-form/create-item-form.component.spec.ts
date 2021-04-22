import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatRadioModule } from '@angular/material';
import { IItem } from '../../models/item';

import { CreateItemFormComponent } from './create-item-form.component';

@Component({
  template: `
    <app-create-item-form [item]="item" (save)="submit($event)">
    </app-create-item-form>
  `
})
class TestCreateItemFormComponent {
  public item: IItem = {id: 11, title: 'Title', description: 'some text', importanceFlag: false};
  public savedItem: IItem;

  public submit(value: IItem) {
    this.savedItem = value;
  }
}

describe('CreateItemFormComponent', () => {
  let component: CreateItemFormComponent;
  let testComponent: TestCreateItemFormComponent;
  let fixture: ComponentFixture<CreateItemFormComponent>;
  let testFixture: ComponentFixture<TestCreateItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateItemFormComponent, TestCreateItemFormComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatInputModule, MatRadioModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestCreateItemFormComponent);
    testComponent = testFixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      testFixture.detectChanges();
    });

    it('should create', () => {
      expect(testComponent).toBeTruthy();
    });

    it('should render h2 tag', () => {
      const nativeElement: HTMLElement = testFixture.nativeElement;
      const h2Element: HTMLElement = nativeElement.querySelector('.form-title');
      expect(h2Element.textContent).toEqual('Here you can create new ToDo item');
    });

    it('should render h2 tag with debug element', () => {
      const h2Element: DebugElement = testFixture.debugElement.query(By.css('.form-title'));
      const h2: HTMLElement = h2Element.nativeElement;
      expect(h2.textContent).toEqual('Here you can create new ToDo item');
    });

    it('should render one form tag', () => {
      const formElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('form'));
      expect(formElement.length).toBe(1);
    });

    it('should render one input tag', () => {
      const inputElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('.create-item__input'));
      expect(inputElement.length).toBe(1);
    });

    it('should render one textarea tag', () => {
      const textareaElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('textarea'));
      expect(textareaElement.length).toBe(1);
    });

    it('should render two mat-radio-button tags', () => {
      const radioButtonsElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(radioButtonsElement.length).toBe(2);
    });

    it('should render first mat-radio-button tag with "Yes" value', () => {
      const radioButtonsElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(radioButtonsElement[0].nativeElement.textContent).toContain('Yes');
    });

    it('should render second mat-radio-button tag with "No" value', () => {
      const radioButtonsElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(radioButtonsElement[1].nativeElement.textContent).toContain('No');
    });

    it('should render "Submit" button', () => {
      const buttonElement: DebugElement = testFixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.textContent).toEqual('Submit');
    });
  });

  describe('@Input and @Output', () => {
    beforeEach(() => {
      testFixture.detectChanges();
    });

    it('should trigger save event on form tag', () => {
      const formElement: DebugElement = testFixture.debugElement.query(By.css('form'));
      formElement.triggerEventHandler('submit', null);
      expect(testComponent.savedItem).toEqual(testComponent.item);
    });
  });

  describe('Lifecycle hooks', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(CreateItemFormComponent);
      component = fixture.componentInstance;
    });

    it('should call ngOnInit', () => {
      const spyOnNgOnInit: jasmine.Spy = spyOn(component, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
      expect(spyOnNgOnInit).toHaveBeenCalled();
    });
  });
});
