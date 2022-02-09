import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAccesorioComponent } from './listar-accesorio.component';

describe('ListarAccesorioComponent', () => {
  let component: ListarAccesorioComponent;
  let fixture: ComponentFixture<ListarAccesorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAccesorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
