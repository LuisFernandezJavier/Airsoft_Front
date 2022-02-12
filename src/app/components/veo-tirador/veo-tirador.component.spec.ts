import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeoTiradorComponent } from './veo-tirador.component';

describe('VeoTiradorComponent', () => {
  let component: VeoTiradorComponent;
  let fixture: ComponentFixture<VeoTiradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeoTiradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeoTiradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
