import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnewspagesComponent } from './editnewspages.component';

describe('EditnewspagesComponent', () => {
  let component: EditnewspagesComponent;
  let fixture: ComponentFixture<EditnewspagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnewspagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnewspagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
