import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcodepromoComponent } from './allcodepromo.component';

describe('AllcodepromoComponent', () => {
  let component: AllcodepromoComponent;
  let fixture: ComponentFixture<AllcodepromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcodepromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcodepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
