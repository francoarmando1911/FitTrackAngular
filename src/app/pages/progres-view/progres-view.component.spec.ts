import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresViewComponent } from './progres-view.component';

describe('ProgresViewComponent', () => {
  let component: ProgresViewComponent;
  let fixture: ComponentFixture<ProgresViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgresViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
