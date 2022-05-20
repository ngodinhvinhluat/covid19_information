import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcharForVieComponent } from './barchar-for-vie.component';

describe('BarcharForVieComponent', () => {
  let component: BarcharForVieComponent;
  let fixture: ComponentFixture<BarcharForVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcharForVieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcharForVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
