import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatearchiveitemComponent } from './createarchiveitem.component';

describe('CreatearchiveitemComponent', () => {
  let component: CreatearchiveitemComponent;
  let fixture: ComponentFixture<CreatearchiveitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatearchiveitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatearchiveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
