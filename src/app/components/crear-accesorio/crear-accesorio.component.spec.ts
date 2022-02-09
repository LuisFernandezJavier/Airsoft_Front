import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAccesorioComponent } from './crear-accesorio.component';

describe('CrearAccesorioComponent', () => {
  let component: CrearAccesorioComponent;
  let fixture: ComponentFixture<CrearAccesorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAccesorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
