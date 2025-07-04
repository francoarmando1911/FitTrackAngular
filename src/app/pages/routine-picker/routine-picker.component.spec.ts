import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinePickerComponent } from './routine-picker.component';

describe('RoutinePickerComponent', () => {
  let component: RoutinePickerComponent;
  let fixture: ComponentFixture<RoutinePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutinePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
