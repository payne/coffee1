import { TestBed, inject } from '@angular/core/testing';

import { CoffeeDrinkerService } from './coffee-drinker.service';

describe('CoffeeDrinkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeDrinkerService]
    });
  });

  it('should be created', inject([CoffeeDrinkerService], (service: CoffeeDrinkerService) => {
    expect(service).toBeTruthy();
  }));
});
