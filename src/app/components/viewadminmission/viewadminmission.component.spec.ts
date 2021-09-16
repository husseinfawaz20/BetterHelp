import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadminmissionComponent } from './viewadminmission.component';

describe('ViewadminmissionComponent', () => {
  let component: ViewadminmissionComponent;
  let fixture: ComponentFixture<ViewadminmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewadminmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewadminmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
