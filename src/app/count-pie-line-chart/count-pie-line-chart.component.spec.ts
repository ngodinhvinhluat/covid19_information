import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPieLineChartComponent } from './count-pie-line-chart.component';

describe('CountPieLineChartComponent', () => {
  let component: CountPieLineChartComponent;
  let fixture: ComponentFixture<CountPieLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountPieLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountPieLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
