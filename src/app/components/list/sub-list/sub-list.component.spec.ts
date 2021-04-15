import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule } from '@angular/material';
import { ListItemComponent } from '../list-item/list-item.component';
import { FilterPipe } from '../../../pipes/filter.pipe';

import { SubListComponent } from './sub-list.component';
import { By } from '@angular/platform-browser';

describe('SubListComponent', () => {
  let component: SubListComponent;
  let fixture: ComponentFixture<SubListComponent>;
  const item = {id: 1, listTitle: 'List title', subList: [{id: 11, title: 'Title', description: 'some text', importanceFlag: false}]};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubListComponent, ListItemComponent, FilterPipe],
      imports: [MatCardModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubListComponent);
    component = fixture.componentInstance;
    component.items = item;
  });

  describe('HTML template', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render three buttons in the label of list', () => {
      const buttonsElement = fixture.debugElement.queryAll(By.css('.label-button'));
      expect(buttonsElement.length).toBe(3);
    });

    it('should render first button with "edit" value', () => {
      const buttonsElement = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[0].nativeElement.textContent).toContain('edit');
    });

    it('should render second button with "file_copy" value', () => {
      const buttonsElement = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[1].nativeElement.textContent).toContain('file_copy');
    });

    it('should render third button with "delete" value', () => {
      const buttonsElement = fixture.debugElement.queryAll(By.css('button'));
      expect(buttonsElement[2].nativeElement.textContent).toContain('delete');
    });

    it('should render "Create" button', () => {
      const buttonElement = fixture.debugElement.query(By.css('.create-button'));
      expect(buttonElement.nativeElement.textContent).toContain('Create');
    });
  });
});
