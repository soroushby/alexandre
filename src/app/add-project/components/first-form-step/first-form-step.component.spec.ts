import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFormStepComponent } from './first-form-step.component';

describe('FirstFormStepComponent', () => {
  let component: FirstFormStepComponent;
  let fixture: ComponentFixture<FirstFormStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFormStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
