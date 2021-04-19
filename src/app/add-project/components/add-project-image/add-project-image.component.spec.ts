import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectImageComponent } from './add-project-image.component';

describe('AddProjectImageComponent', () => {
  let component: AddProjectImageComponent;
  let fixture: ComponentFixture<AddProjectImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
