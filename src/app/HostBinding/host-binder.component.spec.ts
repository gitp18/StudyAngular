import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBinderComponent } from './host-binder.component';

describe('HostBinderComponent', () => {
  let component: HostBinderComponent;
  let fixture: ComponentFixture<HostBinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostBinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
