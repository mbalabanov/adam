import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilepageComponent } from './userprofilepage.component';

describe('UserprofilepageComponent', () => {
  let component: UserprofilepageComponent;
  let fixture: ComponentFixture<UserprofilepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
