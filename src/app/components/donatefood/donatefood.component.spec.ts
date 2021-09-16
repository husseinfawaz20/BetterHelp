import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatefoodComponent } from './donatefood.component';

describe('DonatefoodComponent', () => {
  let component: DonatefoodComponent;
  let fixture: ComponentFixture<DonatefoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatefoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
