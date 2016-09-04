/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FeedService } from './feed.service';

describe('Service: Feed', () => {
  beforeEach(() => {
    addProviders([FeedService]);
  });

  it('should ...',
    inject([FeedService],
      (service: FeedService) => {
        expect(service).toBeTruthy();
      }));
});
