import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesRegisterComponent } from './calories-register.component';

describe('CaloriesRegisterComponent', () => {
  let component: CaloriesRegisterComponent;
  let fixture: ComponentFixture<CaloriesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
