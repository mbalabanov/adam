import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsarticleComponent } from './newsarticle.component';

describe('NewsarticleComponent', () => {
  let component: NewsarticleComponent;
  let fixture: ComponentFixture<BlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
