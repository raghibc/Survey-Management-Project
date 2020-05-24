import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysButtonsComponent } from './surveys-buttons.component';

describe('SurveysButtonsComponent', () => {
  let component: SurveysButtonsComponent;
  let fixture: ComponentFixture<SurveysButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveysButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
