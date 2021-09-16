import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignfamilyComponent } from './assignfamily.component';

describe('AssignfamilyComponent', () => {
  let component: AssignfamilyComponent;
  let fixture: ComponentFixture<AssignfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
