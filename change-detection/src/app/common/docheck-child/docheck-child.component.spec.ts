import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocheckChildComponent } from './docheck-child.component';

describe('DocheckChildComponent', () => {
  let component: DocheckChildComponent;
  let fixture: ComponentFixture<DocheckChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocheckChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocheckChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
