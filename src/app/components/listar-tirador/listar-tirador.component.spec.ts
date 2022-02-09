import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiradorComponent } from './listar-tirador.component';

describe('ListarTiradorComponent', () => {
  let component: ListarTiradorComponent;
  let fixture: ComponentFixture<ListarTiradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTiradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
