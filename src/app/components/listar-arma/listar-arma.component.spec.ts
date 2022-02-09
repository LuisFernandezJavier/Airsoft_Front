import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArmaComponent } from './listar-arma.component';

describe('ListarArmaComponent', () => {
  let component: ListarArmaComponent;
  let fixture: ComponentFixture<ListarArmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarArmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
