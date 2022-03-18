import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInforComponent } from './total-infor.component';

describe('TotalInforComponent', () => {
  let component: TotalInforComponent;
  let fixture: ComponentFixture<TotalInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
