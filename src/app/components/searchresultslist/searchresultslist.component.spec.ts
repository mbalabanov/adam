import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultslistComponent } from './searchresultslist.component';

describe('SearchresultslistComponent', () => {
  let component: SearchresultslistComponent;
  let fixture: ComponentFixture<SearchresultslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
