import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeChildComponent } from './change-child.component';

describe('ChangeChildComponent', () => {
  let component: ChangeChildComponent;
  let fixture: ComponentFixture<ChangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
