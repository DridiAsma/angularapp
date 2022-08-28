import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypevehicleComponent } from './typevehicle.component';

describe('TypevehicleComponent', () => {
  let component: TypevehicleComponent;
  let fixture: ComponentFixture<TypevehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypevehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
