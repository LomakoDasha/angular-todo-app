import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabelPageComponent } from './edit-label-page.component';

describe('EditLabelPageComponent', () => {
  let component: EditLabelPageComponent;
  let fixture: ComponentFixture<EditLabelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLabelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
