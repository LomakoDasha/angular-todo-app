import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatRadioModule } from '@angular/material';

import { EditItemFormComponent } from './edit-item-form.component';

describe('EditItemFormComponent', () => {
  let component: EditItemFormComponent;
  let fixture: ComponentFixture<EditItemFormComponent>;
  const item = {id: 11, title: 'Title', description: 'some text', importanceFlag: false};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditItemFormComponent],
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatInputModule, MatRadioModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemFormComponent);
    component = fixture.componentInstance;
    component.item = item;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render h2 tag', () => {
      const nativeElement: HTMLElement = fixture.nativeElement;
      const h2Element: HTMLElement = nativeElement.querySelector('.form-title');
      expect(h2Element.textContent).toEqual('Here you can change selected ToDo item');
    });

    it('should render h2 tag with debug element', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const h2Element: DebugElement = debugElement.query(By.css('.form-title'));
      const h2: HTMLElement = h2Element.nativeElement;
      expect(h2.textContent).toEqual('Here you can change selected ToDo item');
    });

    it('should render one form tag', () => {
      const formElement = fixture.debugElement.queryAll(By.css('form'));
      expect(formElement.length).toBe(1);
    });

    it('should render one input tag', () => {
      const inputElement = fixture.debugElement.queryAll(By.css('.edit-item__input'));
      expect(inputElement.length).toBe(1);
    });

    it('should render one textarea tag', () => {
      const textareaElement = fixture.debugElement.queryAll(By.css('textarea'));
      expect(textareaElement.length).toBe(1);
    });

    it('should render two mat-radio-button tags', () => {
      const radioButtonsElement = fixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(radioButtonsElement.length).toBe(2);
    });

    it('should render first mat-radio-button tag with "Yes" value', () => {
      const radioButtonsElement = fixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(radioButtonsElement[0].nativeElement.textContent).toContain('Yes');
    });

    it('should render second mat-radio-button tag with "No" value', () => {
      const radioButtonsElement = fixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(radioButtonsElement[1].nativeElement.textContent).toContain('No');
    });

    it('should render "Submit" button', () => {
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.textContent).toEqual('Submit');
    });
  });
});
