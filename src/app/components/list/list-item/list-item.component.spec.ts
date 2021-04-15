import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule } from '@angular/material';

import { ListItemComponent } from './list-item.component';
import { By } from '@angular/platform-browser';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  const item = {id: 11, title: 'Title', description: 'some text', importanceFlag: false};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent],
      imports: [MatCardModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
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

    it('should render two buttons', () => {
      const buttonsElement = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement.length).toBe(2);
    });

    it('should render first button with "Edit" value', () => {
      const buttonsElement = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[0].nativeElement.textContent).toContain('Edit');
    });

    it('should render second button with "Delete" value', () => {
      const buttonsElement = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[1].nativeElement.textContent).toContain('Delete');
    });
  });
});
