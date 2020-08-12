import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdititemComponent } from './edititem.component';

describe('EdititemComponent', () => {
  let component: EdititemComponent;
  let fixture: ComponentFixture<EdititemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdititemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdititemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
