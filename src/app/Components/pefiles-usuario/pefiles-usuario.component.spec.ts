import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PefilesUsuarioComponent } from './pefiles-usuario.component';

describe('PefilesUsuarioComponent', () => {
  let component: PefilesUsuarioComponent;
  let fixture: ComponentFixture<PefilesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PefilesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PefilesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
