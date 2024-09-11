import { TestBed } from '@angular/core/testing';

import { MyPlatfromService } from './my-platfrom.service';

describe('MyPlatfromService', () => {
  let service: MyPlatfromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPlatfromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
