import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentComponent } from './ornament.component';

describe('OrnamentComponent', () => {
  let component: OrnamentComponent;
  let fixture: ComponentFixture<OrnamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
