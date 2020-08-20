import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistpageComponent } from './categorylistpage.component';

describe('CategorylistpageComponent', () => {
  let component: CategorylistpageComponent;
  let fixture: ComponentFixture<CategorylistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorylistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorylistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
