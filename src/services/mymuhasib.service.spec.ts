import { TestBed } from '@angular/core/testing';

import { MymuhasibService } from './mymuhasib.service';

describe('MymuhasibService', () => {
  let service: MymuhasibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MymuhasibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
