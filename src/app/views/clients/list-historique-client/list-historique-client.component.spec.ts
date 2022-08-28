import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoriqueClientComponent } from './list-historique-client.component';

describe('ListHistoriqueClientComponent', () => {
  let component: ListHistoriqueClientComponent;
  let fixture: ComponentFixture<ListHistoriqueClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHistoriqueClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHistoriqueClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
