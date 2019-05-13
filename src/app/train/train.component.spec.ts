import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainComponent } from './train.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('TrainComponent', () => {
  let component: TrainComponent;
  let fixture: ComponentFixture<TrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should create group with given name and data" ,() => {
    async(() => {
      component.createGroup("0001","Rick","https://res.cloudinary.com/demo/image/upload/w_200/lady.jpg");
      expect(component.getPerson("0001","2d16494f-d649-4e94-9212-bcf24a0a3b0e")).toBeTruthy();
    });
  });

  it ("should train Group with correct id" ,() => {
    async(() => {
      component.trainGroup("0001");
      expect(component.getPerson("0001","2d16494f-d649-4e94-9212-bcf24a0a3b0e")).toBeTruthy();
    });
  });
});
