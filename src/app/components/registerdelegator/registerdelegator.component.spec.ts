import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdelegatorComponent } from './registerdelegator.component';

describe('RegisterdelegatorComponent', () => {
  let component: RegisterdelegatorComponent;
  let fixture: ComponentFixture<RegisterdelegatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdelegatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdelegatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
