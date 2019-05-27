import { TestBed } from '@angular/core/testing';

import { RevisionesService } from './revisiones.service';

describe('RevisionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevisionesService = TestBed.get(RevisionesService);
    expect(service).toBeTruthy();
  });
});
