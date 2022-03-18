import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPieChartComponent } from './world-pie-chart.component';

describe('WorldPieChartComponent', () => {
  let component: WorldPieChartComponent;
  let fixture: ComponentFixture<WorldPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
