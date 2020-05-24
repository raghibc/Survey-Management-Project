import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersButtonsComponent } from './answers-buttons.component';

describe('AnswersButtonsComponent', () => {
  let component: AnswersButtonsComponent;
  let fixture: ComponentFixture<AnswersButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
