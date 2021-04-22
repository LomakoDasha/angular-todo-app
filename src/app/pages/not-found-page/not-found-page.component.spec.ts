import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { DebugElement, DebugNode } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPageComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render h2 tag', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const h2Element: DebugElement = debugElement.query(By.css('h2'));
      const h2: HTMLElement = h2Element.nativeElement;
      expect(h2.textContent).toEqual('404: Not Found');
    });

    it('should render p tag', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const paragraphElement: DebugElement = debugElement.query(By.css('.card-text'));
      const paragraph: HTMLElement = paragraphElement.nativeElement;
      expect(paragraph.textContent).toEqual('Hey! It looks like this page doesn\'t exist yet.');
    });

    it('should render a tag', () => {
      const debugElement: DebugElement = fixture.debugElement;
      const linkElement: DebugElement = debugElement.query(By.css('a'));
      const link: HTMLElement = linkElement.nativeElement;
      expect(link.textContent).toEqual('Go to the main page');
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should navigate to / on link click', () => {
      const location = TestBed.get(Location);
      const linkElement: DebugElement = fixture.debugElement.query(By.css('a'));
      const nativeLink = linkElement.nativeElement;
      nativeLink.click();
      fixture.detectChanges();
      fixture.whenStable()
        .then(() => {
          expect(location.path()).toBe('/');
        });
    });
  });
});
