import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesUsuarioComponent } from './perfiles-usuario.component';

describe('PerfilesUsuarioComponent', () => {
  let component: PerfilesUsuarioComponent;
  let fixture: ComponentFixture<PerfilesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
