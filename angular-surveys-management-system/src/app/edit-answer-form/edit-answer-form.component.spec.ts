import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnswerFormComponent } from './edit-answer-form.component';

describe('EditAnswerFormComponent', () => {
  let component: EditAnswerFormComponent;
  let fixture: ComponentFixture<EditAnswerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnswerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
