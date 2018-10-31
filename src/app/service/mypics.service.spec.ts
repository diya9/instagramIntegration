import { TestBed, inject } from '@angular/core/testing';

import { MypicsService } from './mypics.service';

describe('MypicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MypicsService]
    });
  });

  it('should be created', inject([MypicsService], (service: MypicsService) => {
    expect(service).toBeTruthy();
  }));
});
