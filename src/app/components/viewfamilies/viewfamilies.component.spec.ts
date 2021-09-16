import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfamiliesComponent } from './viewfamilies.component';

describe('ViewfamiliesComponent', () => {
  let component: ViewfamiliesComponent;
  let fixture: ComponentFixture<ViewfamiliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfamiliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
