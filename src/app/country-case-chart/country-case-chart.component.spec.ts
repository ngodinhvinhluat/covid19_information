import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCaseChartComponent } from './country-case-chart.component';

describe('CountryCaseChartComponent', () => {
  let component: CountryCaseChartComponent;
  let fixture: ComponentFixture<CountryCaseChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCaseChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
