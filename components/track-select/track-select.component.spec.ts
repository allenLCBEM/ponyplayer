import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSelectComponent } from './track-select.component';

describe('TrackSelectComponent', () => {
  let component: TrackSelectComponent;
  let fixture: ComponentFixture<TrackSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
