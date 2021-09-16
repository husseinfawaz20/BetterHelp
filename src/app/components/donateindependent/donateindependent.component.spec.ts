import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateindependentComponent } from './donateindependent.component';

describe('DonateindependentComponent', () => {
  let component: DonateindependentComponent;
  let fixture: ComponentFixture<DonateindependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateindependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateindependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
