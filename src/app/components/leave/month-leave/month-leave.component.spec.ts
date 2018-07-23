import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthLeaveComponent } from './month-leave.component';

describe('MonthLeaveComponent', () => {
  let component: MonthLeaveComponent;
  let fixture: ComponentFixture<MonthLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
