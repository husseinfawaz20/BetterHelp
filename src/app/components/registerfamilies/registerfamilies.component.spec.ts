import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfamiliesComponent } from './registerfamilies.component';

describe('RegisterfamiliesComponent', () => {
  let component: RegisterfamiliesComponent;
  let fixture: ComponentFixture<RegisterfamiliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterfamiliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
