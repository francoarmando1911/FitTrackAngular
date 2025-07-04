import { TestBed } from '@angular/core/testing';

import { CaloriesRegisterService } from './calories-register.service';

describe('CaloriesRegisterService', () => {
  let service: CaloriesRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaloriesRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
