import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailspageComponent } from './itemdetailspage.component';

describe('ItemdetailspageComponent', () => {
  let component: ItemdetailspageComponent;
  let fixture: ComponentFixture<ItemdetailspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdetailspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
