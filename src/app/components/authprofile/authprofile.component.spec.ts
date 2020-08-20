import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthprofileComponent } from './authprofile.component';

describe('AuthprofileComponent', () => {
  let component: AuthprofileComponent;
  let fixture: ComponentFixture<AuthprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
