import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatToolbarModule } from '@angular/material';

import { SearchBarComponent } from './search-bar.component';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `
    <app-search-bar (search)="onSearch()">
    </app-search-bar>
  `
})
class TestSearchBarComponent {
  public itemForSearch: string;

  public onSearch() {
    this.itemForSearch = 'search text';
  }
}

describe('SearchBarComponent', () => {
  let testComponent: TestSearchBarComponent;
  let fixture: ComponentFixture<TestSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent, TestSearchBarComponent],
      imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatInputModule, MatToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSearchBarComponent);
    testComponent = fixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(testComponent).toBeTruthy();
    });

    it('should render one input tag', () => {
      const textareaElement: DebugElement[] = fixture.debugElement.queryAll(By.css('input'));
      expect(textareaElement.length).toBe(1);
    });

    it('should render "Search" button', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.textContent).toEqual('Search');
    });
  });

  describe('@Output', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should trigger keyup event on input tag', () => {
      const inputElement: DebugElement = fixture.debugElement.query(By.css('input'));
      inputElement.triggerEventHandler('keyup', null);
      expect(testComponent.itemForSearch).toEqual('search text');
    });

    it('should trigger click event on button tag', () => {
      const buttonElement: DebugElement = fixture.debugElement.query(By.css('button'));
      buttonElement.triggerEventHandler('click', null);
      expect(testComponent.itemForSearch).toEqual('search text');
    });
  });
});
