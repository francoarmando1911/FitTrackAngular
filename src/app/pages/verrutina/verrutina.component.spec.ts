import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerrutinaComponent } from './verrutina.component';

describe('VerrutinaComponent', () => {
  let component: VerrutinaComponent;
  let fixture: ComponentFixture<VerrutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerrutinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerrutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
