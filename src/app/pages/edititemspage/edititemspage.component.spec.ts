import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdititemspageComponent } from './edititemspage.component';

describe('EdititemspageComponent', () => {
  let component: EdititemspageComponent;
  let fixture: ComponentFixture<EdititemspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdititemspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdititemspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
