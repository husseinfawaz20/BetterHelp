import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdelegatorsComponent } from './viewdelegators.component';

describe('ViewdelegatorsComponent', () => {
  let component: ViewdelegatorsComponent;
  let fixture: ComponentFixture<ViewdelegatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdelegatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdelegatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
