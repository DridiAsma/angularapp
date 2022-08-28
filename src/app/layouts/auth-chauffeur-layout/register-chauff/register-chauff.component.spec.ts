import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChauffComponent } from './register-chauff.component';

describe('RegisterChauffComponent', () => {
  let component: RegisterChauffComponent;
  let fixture: ComponentFixture<RegisterChauffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterChauffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterChauffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
