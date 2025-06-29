import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesIngestedComponent } from './calories-ingested.component';

describe('CaloriesIngestedComponent', () => {
  let component: CaloriesIngestedComponent;
  let fixture: ComponentFixture<CaloriesIngestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesIngestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesIngestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
