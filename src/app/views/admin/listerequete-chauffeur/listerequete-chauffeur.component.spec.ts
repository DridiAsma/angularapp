import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerequeteChauffeurComponent } from './listerequete-chauffeur.component';

describe('ListerequeteChauffeurComponent', () => {
  let component: ListerequeteChauffeurComponent;
  let fixture: ComponentFixture<ListerequeteChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerequeteChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerequeteChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
