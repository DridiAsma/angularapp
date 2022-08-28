import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarchaufComponent } from './navbarchauf.component';

describe('NavbarchaufComponent', () => {
  let component: NavbarchaufComponent;
  let fixture: ComponentFixture<NavbarchaufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarchaufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarchaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
