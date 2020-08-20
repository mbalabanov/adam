import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchallComponent } from './searchall.component';

describe('SearchallComponent', () => {
  let component: SearchallComponent;
  let fixture: ComponentFixture<SearchallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
