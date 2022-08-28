import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteStarComponent } from './note-star.component';

describe('NoteStarComponent', () => {
  let component: NoteStarComponent;
  let fixture: ComponentFixture<NoteStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
