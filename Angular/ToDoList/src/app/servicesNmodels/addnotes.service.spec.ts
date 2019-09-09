import { TestBed } from '@angular/core/testing';

import { AddnotesService } from './addnotes.service';

describe('AddnotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddnotesService = TestBed.get(AddnotesService);
    expect(service).toBeTruthy();
  });
});
