import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectComponent } from './detect.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from '../services/data.service';

describe('DetectComponent', () => {
  let component: DetectComponent;
  let fixture: ComponentFixture<DetectComponent>;
  let dataService : DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get json response from ', function() {
    var detectComponent = new DetectComponent(dataService);
    detectComponent.getData_URL('www.example.com/image.jpg')
    expect(component).toBeTruthy();
  });


  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Upload an image to Face Detect');
  });

});
