import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerequeteClientComponent } from './listerequete-client.component';

describe('ListerequeteClientComponent', () => {
  let component: ListerequeteClientComponent;
  let fixture: ComponentFixture<ListerequeteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerequeteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerequeteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
