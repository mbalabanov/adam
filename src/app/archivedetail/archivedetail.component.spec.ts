import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedetailComponent } from './archivedetail.component';

describe('ArchivedetailComponent', () => {
  let component: ArchivedetailComponent;
  let fixture: ComponentFixture<ArchivedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
