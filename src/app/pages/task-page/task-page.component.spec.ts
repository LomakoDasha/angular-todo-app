import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ListComponent } from '../../components/list/list.component';

import { TaskPageComponent } from './task-page.component';

describe('TaskPageComponent', () => {
  let component: TaskPageComponent;
  let fixture: ComponentFixture<TaskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskPageComponent, SearchBarComponent, ListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
