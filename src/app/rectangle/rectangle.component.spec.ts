import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleComponent } from './rectangle.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DetectComponent} from '../detect/detect.component';

describe('RectangleComponent', () => {
  let component: RectangleComponent;
  let fixture: ComponentFixture<RectangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set nbFaces , width and height for the rectangle', () => {
    async(() => {
      let detectComponent: DetectComponent;
      component.getRectangle();
      detectComponent.getData_URL("https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg");
      expect(component.nbFaces).toBe(1);
      expect(component.height).toBe(64);
      expect(component.width).toBe(73);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
