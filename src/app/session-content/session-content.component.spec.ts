import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionContentComponent } from './session-content.component';

describe('SessionContentComponent', () => {
  let component: SessionContentComponent;
  let fixture: ComponentFixture<SessionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
