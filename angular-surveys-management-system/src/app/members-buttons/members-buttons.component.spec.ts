import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersButtonsComponent } from './members-buttons.component';

describe('MembersButtonsComponent', () => {
  let component: MembersButtonsComponent;
  let fixture: ComponentFixture<MembersButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
