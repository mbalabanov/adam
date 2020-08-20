import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlistpageComponent } from './itemlistpage.component';

describe('ItemlistpageComponent', () => {
  let component: ItemlistpageComponent;
  let fixture: ComponentFixture<ItemlistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemlistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
