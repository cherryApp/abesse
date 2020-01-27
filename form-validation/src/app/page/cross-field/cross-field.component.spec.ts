import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldComponent } from './cross-field.component';

describe('CrossFieldComponent', () => {
  let component: CrossFieldComponent;
  let fixture: ComponentFixture<CrossFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
