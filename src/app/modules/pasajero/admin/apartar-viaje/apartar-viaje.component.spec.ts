import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartarViajeComponent } from './apartar-viaje.component';

describe('ApartarViajeComponent', () => {
  let component: ApartarViajeComponent;
  let fixture: ComponentFixture<ApartarViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartarViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
