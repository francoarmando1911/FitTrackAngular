import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFitTrackComponent } from './home-fit-track.component';

describe('HomeFitTrackComponent', () => {
  let component: HomeFitTrackComponent;
  let fixture: ComponentFixture<HomeFitTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFitTrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFitTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
