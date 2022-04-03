import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVieComponent } from './total-vie.component';

describe('TotalVieComponent', () => {
  let component: TotalVieComponent;
  let fixture: ComponentFixture<TotalVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
