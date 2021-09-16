import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterindependentComponent } from './registerindependent.component';

describe('RegisterindependentComponent', () => {
  let component: RegisterindependentComponent;
  let fixture: ComponentFixture<RegisterindependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterindependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterindependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
