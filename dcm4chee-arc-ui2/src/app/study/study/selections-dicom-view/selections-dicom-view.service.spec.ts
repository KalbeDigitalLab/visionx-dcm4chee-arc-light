import { TestBed, inject } from '@angular/core/testing';

import { SelectionsDicomViewService } from './selections-dicom-view.service';

describe('SelectionsDicomViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [SelectionsDicomViewService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should be created', inject([SelectionsDicomViewService], (service: SelectionsDicomViewService) => {
    expect(service).toBeTruthy();
  }));
});
