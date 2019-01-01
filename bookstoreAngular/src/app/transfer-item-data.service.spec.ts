import { TestBed } from '@angular/core/testing';

import { TransferItemDataService } from './transfer-item-data.service';

describe('TransferItemDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferItemDataService = TestBed.get(TransferItemDataService);
    expect(service).toBeTruthy();
  });
});
