import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';

import { LabelFormComponent } from './label-form.component';

describe('LabelFormComponent', () => {
  let component: LabelFormComponent;
  let fixture: ComponentFixture<LabelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LabelFormComponent],
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render <h2> element`, () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h2Element: HTMLElement = nativeElement.querySelector('.form-title');
    expect(h2Element.textContent).toEqual('Here you can change label of selected list');
  });

  it(`should render <h2> element with debug element`, () => {
    const debugElement: DebugElement = fixture.debugElement;
    const h2Element: DebugElement = debugElement.query(By.css('.form-title'));
    const h2: HTMLElement = h2Element.nativeElement;
    expect(h2.textContent).toEqual('Here you can change label of selected list');
  });
});
