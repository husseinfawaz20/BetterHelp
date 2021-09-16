import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindependentsComponent } from './viewindependents.component';

describe('ViewindependentsComponent', () => {
  let component: ViewindependentsComponent;
  let fixture: ComponentFixture<ViewindependentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewindependentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewindependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
