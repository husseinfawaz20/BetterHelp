import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependenthomeComponent } from './independenthome.component';

describe('IndependenthomeComponent', () => {
  let component: IndependenthomeComponent;
  let fixture: ComponentFixture<IndependenthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependenthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
