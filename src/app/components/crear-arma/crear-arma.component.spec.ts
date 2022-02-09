import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArmaComponent } from './crear-arma.component';

describe('CrearArmaComponent', () => {
  let component: CrearArmaComponent;
  let fixture: ComponentFixture<CrearArmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearArmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
