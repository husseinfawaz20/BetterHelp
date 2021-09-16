import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfamilyreportComponent } from './viewfamilyreport.component';

describe('ViewfamilyreportComponent', () => {
  let component: ViewfamilyreportComponent;
  let fixture: ComponentFixture<ViewfamilyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfamilyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfamilyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
