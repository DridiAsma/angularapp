import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleclientComponent } from './detailleclient.component';

describe('DetailleclientComponent', () => {
  let component: DetailleclientComponent;
  let fixture: ComponentFixture<DetailleclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
