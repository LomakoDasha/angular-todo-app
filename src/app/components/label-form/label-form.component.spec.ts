import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';
import { IListOfItems } from '../../models/listOfItems';

import { LabelFormComponent } from './label-form.component';

@Component({
  template: `
    <app-label-form [item]="item" (save)="submit($event)">
    </app-label-form>
  `
})
class TestLabelFormComponent {
  public item: IListOfItems = {
    id: 1,
    listTitle: 'List title',
    subList: [{id: 11, title: 'Title', description: 'some text', importanceFlag: false}]
  };
  public savedItem: IListOfItems;

  public submit(value: IListOfItems) {
    this.savedItem = value;
  }
}

describe('LabelFormComponent', () => {
  let component: LabelFormComponent;
  let testComponent: TestLabelFormComponent;
  let fixture: ComponentFixture<LabelFormComponent>;
  let testFixture: ComponentFixture<TestLabelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LabelFormComponent, TestLabelFormComponent],
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestLabelFormComponent);
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
      expect(h2Element.textContent).toEqual('Here you can change label of selected list');
    });

    it('should render h2 tag with debug element', () => {
      const debugElement: DebugElement = testFixture.debugElement;
      const h2Element: DebugElement = debugElement.query(By.css('.form-title'));
      const h2: HTMLElement = h2Element.nativeElement;
      expect(h2.textContent).toEqual('Here you can change label of selected list');
    });

    it('should render one form tag', () => {
      const formElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('form'));
      expect(formElement.length).toBe(1);
    });

    it('should render one input tag', () => {
      const textareaElement: DebugElement[] = testFixture.debugElement.queryAll(By.css('input'));
      expect(textareaElement.length).toBe(1);
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
      fixture = TestBed.createComponent(LabelFormComponent);
      component = fixture.componentInstance;
    });

    it('should call ngOnInit', () => {
      const spyOnNgOnInit: jasmine.Spy = spyOn(component, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
      expect(spyOnNgOnInit).toHaveBeenCalled();
    });
  });
});
