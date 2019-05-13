import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyComponent } from './identify.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {readFile} from 'fs';

describe('IdentifyComponent', () => {
  let component: IdentifyComponent;
  let fixture: ComponentFixture<IdentifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle Url Input', () => {
    async(() => {
      component.handleUrlInput("https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg"
        ,"712cd6e9-6d1e-4d46-8279-6e5b753dd2df");
      expect(component.matchId).toContain("712cd6e9-6d1e-4d46-8279-6e5b753dd2df");
    });
  });

  it('should get Preview', () => {
    async(() => {
      let file: File;
      component.getPreview(file);
      expect(component.url).toContain(file.name);
    });
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(IdentifyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Upload an image to Face Identify');
  });
  
});
