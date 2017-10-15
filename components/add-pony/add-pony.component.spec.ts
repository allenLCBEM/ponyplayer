import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPonyComponent } from './add-pony.component';

describe('AddPonyComponent', () => {
  let component: AddPonyComponent;
  let fixture: ComponentFixture<AddPonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
