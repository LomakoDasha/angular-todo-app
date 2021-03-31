import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render <h1> element`, () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h1Element: HTMLElement = nativeElement.querySelector('.header__h1');
    expect(h1Element.textContent).toEqual('Angular ToDo app');
  });

  it(`should render <h1> element with debug element`, () => {
    const debugElement: DebugElement = fixture.debugElement;
    const h1Element: DebugElement = debugElement.query(By.css('.header__h1'));
    const h1: HTMLElement = h1Element.nativeElement;
    expect(h1.textContent).toEqual('Angular ToDo app');
  });
});
