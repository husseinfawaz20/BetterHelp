import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatehomeComponent } from './delegatehome.component';

describe('DelegatehomeComponent', () => {
  let component: DelegatehomeComponent;
  let fixture: ComponentFixture<DelegatehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegatehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
