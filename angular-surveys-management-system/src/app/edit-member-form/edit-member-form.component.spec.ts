import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberFormComponent } from './edit-member-form.component';

describe('EditMemberFormComponent', () => {
  let component: EditMemberFormComponent;
  let fixture: ComponentFixture<EditMemberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMemberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
