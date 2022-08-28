import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpassClientComponent } from './forgetpass-client.component';

describe('ForgetpassClientComponent', () => {
  let component: ForgetpassClientComponent;
  let fixture: ComponentFixture<ForgetpassClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpassClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpassClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
