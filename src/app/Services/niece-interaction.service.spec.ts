import { TestBed } from '@angular/core/testing';

import { NieceInteractionService } from './niece-interaction.service';

describe('NieceInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NieceInteractionService = TestBed.get(NieceInteractionService);
    expect(service).toBeTruthy();
  });
});
