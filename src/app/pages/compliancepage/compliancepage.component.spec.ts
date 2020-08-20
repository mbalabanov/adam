import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliancepageComponent } from './compliancepage.component';

describe('CompliancepageComponent', () => {
  let component: CompliancepageComponent;
  let fixture: ComponentFixture<CompliancepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliancepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliancepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
