import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompliancepagesComponent } from './editcompliancepages.component';

describe('EditcompliancepagesComponent', () => {
  let component: EditcompliancepagesComponent;
  let fixture: ComponentFixture<EditcompliancepagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcompliancepagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcompliancepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
