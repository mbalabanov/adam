import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistpageComponent } from './newslistpage.component';

describe('NewslistpageComponent', () => {
  let component: NewslistpageComponent;
  let fixture: ComponentFixture<NewslistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
