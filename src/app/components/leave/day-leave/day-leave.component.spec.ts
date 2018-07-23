import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayLeaveComponent } from './day-leave.component';

describe('DayLeaveComponent', () => {
  let component: DayLeaveComponent;
  let fixture: ComponentFixture<DayLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
