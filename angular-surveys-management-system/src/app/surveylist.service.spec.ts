import { TestBed } from '@angular/core/testing';

import { SurveylistService } from './surveylist.service';

describe('SurveylistService', () => {
  let service: SurveylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
