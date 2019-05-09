import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the href link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').href).toContain('https://github.com/houssam98/');
  }));

  it('should render the correct image', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('/assets/img/github.png');
  }));
});
