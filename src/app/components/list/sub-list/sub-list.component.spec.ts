import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule } from '@angular/material';
import { ListItemComponent } from '../list-item/list-item.component';
import { FilterPipe } from '../../../pipes/filter.pipe';

import { SubListComponent } from './sub-list.component';

describe('SubListComponent', () => {
  let component: SubListComponent;
  let fixture: ComponentFixture<SubListComponent>;

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
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
