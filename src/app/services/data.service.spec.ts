import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('should have correct url and subscription key', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.detectFace_URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPslf0TkXQodPR0VRWbrDdkXTz1Ase0q8dOa8VVA17Ect_uI4')).toBeTruthy();
  });
});
