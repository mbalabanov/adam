import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivecategoriesComponent } from './archivecategories.component';

describe('ArchiveComponent', () => {
  let component: ArchivecategoriesComponent;
  let fixture: ComponentFixture<ArchivecategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivecategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
