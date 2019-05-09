import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectComponent } from './detect.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from '../services/data.service';
import {url} from 'inspector';
import {isNull} from 'util';

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
    component.getData_URL('www.example.com/image.jpg');
    expect(component.url).toContain("www.example.com/image.jpg");
    console.log(component.faceApiResponse);
    expect(component.faceApiResponse).toString();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Upload an image to Face Detect');
  });

  it('should render the correct image', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('/assets/img/facial-recognition.png');
  }));
});
