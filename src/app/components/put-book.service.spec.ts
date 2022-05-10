import { TestBed } from '@angular/core/testing';

import { PutBookService } from './put-book.service';

describe('PutBookService', () => {
  let service: PutBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
