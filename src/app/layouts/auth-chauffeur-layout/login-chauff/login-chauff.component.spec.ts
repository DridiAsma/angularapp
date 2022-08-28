import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChauffComponent } from './login-chauff.component';

describe('LoginChauffComponent', () => {
  let component: LoginChauffComponent;
  let fixture: ComponentFixture<LoginChauffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginChauffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginChauffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
