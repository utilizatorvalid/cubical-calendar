/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventServiceService } from './event-service.service';

describe('EventServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventServiceService]
    });
  });

  it('should ...', inject([EventServiceService], (service: EventServiceService) => {
    expect(service).toBeTruthy();
  }));
});
