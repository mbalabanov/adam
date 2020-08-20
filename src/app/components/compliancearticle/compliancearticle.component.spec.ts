import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliancearticleComponent } from './compliancearticle.component';

describe('CompliancearticleComponent', () => {
  let component: CompliancearticleComponent;
  let fixture: ComponentFixture<CompliancearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliancearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliancearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
