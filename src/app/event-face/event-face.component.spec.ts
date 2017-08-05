/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventFaceComponent } from './event-face.component';

describe('EventFaceComponent', () => {
  let component: EventFaceComponent;
  let fixture: ComponentFixture<EventFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
