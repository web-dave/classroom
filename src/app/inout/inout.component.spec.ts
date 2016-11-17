/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InoutComponent } from './inout.component';

describe('InoutComponent', () => {
  let component: InoutComponent;
  let fixture: ComponentFixture<InoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
