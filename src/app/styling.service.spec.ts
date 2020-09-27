import { TestBed } from '@angular/core/testing';

import { StylingService } from './styling.service';

describe('StylingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StylingService = TestBed.get(StylingService);
    expect(service).toBeTruthy();
  });
});
