import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchauffeurComponent } from './allchauffeur.component';

describe('AllchauffeurComponent', () => {
  let component: AllchauffeurComponent;
  let fixture: ComponentFixture<AllchauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllchauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllchauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
