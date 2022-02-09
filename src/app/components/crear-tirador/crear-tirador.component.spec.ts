import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTiradorComponent } from './crear-tirador.component';

describe('CrearTiradorComponent', () => {
  let component: CrearTiradorComponent;
  let fixture: ComponentFixture<CrearTiradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTiradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTiradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
