import { TestBed } from '@angular/core/testing';

import { MiBackendService } from './mi-backend.service';

describe('MiBackendService', () => {
  let service: MiBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
