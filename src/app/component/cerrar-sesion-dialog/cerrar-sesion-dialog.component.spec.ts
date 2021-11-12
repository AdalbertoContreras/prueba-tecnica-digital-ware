import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarSesionDialogComponent } from './cerrar-sesion-dialog.component';

describe('CerrarSesionDialogComponent', () => {
  let component: CerrarSesionDialogComponent;
  let fixture: ComponentFixture<CerrarSesionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerrarSesionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarSesionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
