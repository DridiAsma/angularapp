import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotifComponent } from './editnotif.component';

describe('EditnotifComponent', () => {
  let component: EditnotifComponent;
  let fixture: ComponentFixture<EditnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
