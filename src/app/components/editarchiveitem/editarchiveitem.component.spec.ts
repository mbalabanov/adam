import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarchiveitemComponent } from './editarchiveitem.component';

describe('EditarchiveitemComponent', () => {
  let component: EditarchiveitemComponent;
  let fixture: ComponentFixture<EditarchiveitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarchiveitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarchiveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
