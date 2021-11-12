import { TestBed } from '@angular/core/testing';

import { AreonaveService } from './areonave.service';

describe('AreonaveService', () => {
  let service: AreonaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreonaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
