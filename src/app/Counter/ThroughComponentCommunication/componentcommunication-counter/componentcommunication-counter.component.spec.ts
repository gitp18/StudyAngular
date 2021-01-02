import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentcommunicationCounterComponent } from './componentcommunication-counter.component';

describe('ComponentcommunicationCounterComponent', () => {
  let component: ComponentcommunicationCounterComponent;
  let fixture: ComponentFixture<ComponentcommunicationCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentcommunicationCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentcommunicationCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
