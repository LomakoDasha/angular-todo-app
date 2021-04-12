import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatToolbarModule } from '@angular/material';

import { SearchBarComponent } from './search-bar.component';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatInputModule, MatToolbarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render one input tag', () => {
      const textareaElement = fixture.debugElement.queryAll(By.css('input'));
      expect(textareaElement.length).toBe(1);
    });

    it('should render "Search" button', () => {
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.textContent).toEqual('Search');
    });
  });
});
