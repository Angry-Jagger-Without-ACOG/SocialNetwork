import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosUsuarioComponent } from './registros-usuario.component';

describe('RegistrosUsuarioComponent', () => {
  let component: RegistrosUsuarioComponent;
  let fixture: ComponentFixture<RegistrosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
