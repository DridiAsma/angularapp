import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepromoComponent } from './codepromo.component';

describe('CodepromoComponent', () => {
  let component: CodepromoComponent;
  let fixture: ComponentFixture<CodepromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodepromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
