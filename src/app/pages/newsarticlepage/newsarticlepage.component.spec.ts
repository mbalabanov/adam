import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsarticlepageComponent } from './newsarticlepage.component';

describe('NewsarticlepageComponent', () => {
  let component: NewsarticlepageComponent;
  let fixture: ComponentFixture<NewsarticlepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsarticlepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsarticlepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
