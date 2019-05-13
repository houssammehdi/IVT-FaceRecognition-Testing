import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectComponent } from './detect.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from '../services/data.service';


describe('DetectComponent', () => {
  let component: DetectComponent;
  let fixture: ComponentFixture<DetectComponent>;

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
    component.getData_URL('https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg');
  });

  it('should get json response from ', function() {
    async(() => {
      component.getData_URL('https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg');
      expect(component.url).toContain("https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg");
      expect(component.faceApiResponse[0]).toContain("female");
    });
  });

  it('should set nbFaces to 0 if the picture does not have a face',function(){
    async(() => {
      component.getData_URL('https://cdn-images-1.medium.com/max/1600/1*tY2U95U5Tf_wyiFlvImPFw.png');
      expect(component.url).toContain("https://cdn-images-1.medium.com/max/1600/1*tY2U95U5Tf_wyiFlvImPFw.png");
      expect(component.nbFaces).toBe(0);
    });
  });

  it('should retrun the correct height',function(){
    async(() => {
      component.getData_URL('https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg');
      let height = component.getHeight();
      expect(height).toBe(64);
    });
  });

  it('should retrun the correct width',function(){
    async(() => {
      component.getData_URL('https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg');
      let width = component.getWidth();
      expect(width).toBe(73);
    });
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
