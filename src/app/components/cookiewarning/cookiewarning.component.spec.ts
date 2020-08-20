import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiewarningComponent } from './cookiewarning.component';

describe('CookiewarningComponent', () => {
  let component: CookiewarningComponent;
  let fixture: ComponentFixture<CookiewarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiewarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiewarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
