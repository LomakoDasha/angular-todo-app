import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatRadioModule } from '@angular/material';

import { CreateItemFormComponent } from './create-item-form.component';

describe('CreateItemFormComponent', () => {
  let component: CreateItemFormComponent;
  let fixture: ComponentFixture<CreateItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateItemFormComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatInputModule, MatRadioModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render <h2> element`, () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h2Element: HTMLElement = nativeElement.querySelector('.form-title');
    expect(h2Element.textContent).toEqual('Here you can create new ToDo item');
  });

  it(`should render <h2> element with debug element`, () => {
    const debugElement: DebugElement = fixture.debugElement;
    const h2Element: DebugElement = debugElement.query(By.css('.form-title'));
    const h2: HTMLElement = h2Element.nativeElement;
    expect(h2.textContent).toEqual('Here you can create new ToDo item');
  });
});
