import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarouselfeaturesComponent } from './editcarouselfeatures.component';

describe('EditcarouselfeaturesComponent', () => {
  let component: EditcarouselfeaturesComponent;
  let fixture: ComponentFixture<EditcarouselfeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcarouselfeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcarouselfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
