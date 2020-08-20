import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchitemsComponent } from './searchitems.component';

describe('SearchitemsComponent', () => {
  let component: SearchitemsComponent;
  let fixture: ComponentFixture<SearchitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
