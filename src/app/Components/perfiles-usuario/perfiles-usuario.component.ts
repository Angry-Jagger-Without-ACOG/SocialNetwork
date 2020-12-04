import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Perfil } from 'src/app/Models/Perfil.model';

@Component({
  selector: 'app-perfiles-usuario',
  templateUrl: './perfiles-usuario.component.html',
  styleUrls: ['./perfiles-usuario.component.css']
})
export class PerfilesUsuarioComponent implements OnInit {

  Perfiles: Perfil[] = [];
  Perfil_Selec: Perfil = null;
  Opcion: boolean = false;

  Llenar_Equipo() {
    this.Perfiles.push(new Perfil('Marc', 'Valdivia', 'brazosrotos@gmail.com', 'roto', 'assets/Imagenes/valdivia.png', 20, 'Un tio con los brazos rotos'));
    this.Perfiles.push(new Perfil('Ichigo', 'Kurosaki', 'bleach@gmail.com', 'Zangetsu', 'assets/Imagenes/ichigo.jpg', 18, 'Shinigami Sustituto'));
    this.Perfiles.push(new Perfil('Byakuya', 'Kuchiki', 'bleach@gmail.com', 'Senbonzakura', 'assets/Imagenes/valdivia.png', 200, 'Capitan Shinigami esquadorn 6'));
    this.Perfiles.push(new Perfil('Renji', 'Abarai', 'bleach@gmail.com', 'Zubimaru', 'assets/Imagenes/valdivia.png', 150, 'Teniente Shinigami esquadorn 6'));
    this.Perfiles.push(new Perfil('Toshiro', 'Hitsugaya', 'bleach@gmail.com', 'Hyorinmaru', 'assets/Imagenes/valdivia.png', 100, 'Capitan Shinigami esquadorn 10'));
    this.Perfiles.push(new Perfil('Rukia', 'Kuchiki', 'bleach@gmail.com', 'Sode_No', 'assets/Imagenes/valdivia.png', 150, 'Shinigami'));
    this.Perfiles.push(new Perfil('Kisuke', 'Urahara', 'bleach@gmail.com', 'Benihime', 'assets/Imagenes/valdivia.png', 300, 'Shinigami'));
    this.Perfiles.push(new Perfil('Genryusai', 'Yamamoto', 'bleach@gmail.com', 'Ryuijin', 'assets/Imagenes/valdivia.png', 1000, 'Capitan Shinigami esquadron 1'));
    this.Perfiles.push(new Perfil('Chad', 'Sado', 'bleach@gmail.com', 'BrazodelDiablo', 'assets/Imagenes/valdivia.png', 17, 'Humano con habilidades especiales'));
  }

  constructor() { }

  ngOnInit(): void {
    this.Perfiles = this.getperfiles();
  }

  getperfiles(): Perfil[] {
    this.Llenar_Equipo();
    return this.Perfiles;
  }

  //Funcion para añadir registros al array
  Rellenar(Nuevo: Perfil): void {
    this.Perfiles.push(Nuevo);
  }

 // Funcion que cambia el valor de Opcion para mostra la pagina con la lsita de perfiles o
 // el formulario de crear-los
  Set_Op(op: boolean): void {
    this.Opcion = op;
  }

  //Funcion para selecionar un perfil
  Get(Perf: Perfil) {
    this.Perfil_Selec = Perf;
  }

}
