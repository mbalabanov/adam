import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsarticleComponent } from './newsarticle.component';

describe('NewsarticleComponent', () => {
  let component: NewsarticleComponent;
  let fixture: ComponentFixture<NewsarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
