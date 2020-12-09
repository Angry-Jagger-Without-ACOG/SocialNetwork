import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Perfil } from 'src/app/Models/Perfil.model';
import {Comprobacion} from './Comprobador'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registros-usuario',
  templateUrl: './registros-usuario.component.html',
  styleUrls: ['./registros-usuario.component.css']
})
export class RegistrosUsuarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  Nuevo_Perfil: FormGroup;
  submitted = false;
  Nuevo : Perfil = null;

  //Output para devolver un booleano que sirve para cambiar que se vera en la pagina
  @Output() volver = new EventEmitter<boolean>();
  //Output para devolver el perfil que sera insertado en el array de "Perfiles"
  @Output() nuevo = new EventEmitter<Perfil>();

  ngOnInit(): void {

    this.Nuevo_Perfil = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Correo: ['', [Validators.required, Validators.email]],
      Contras: ['', Validators.required],
      RepContra: ['', [Validators.required,]],
      Foto: ['', Validators.required],
      Edad: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      Descripcion: ['', [Validators.required, Validators.minLength(4)]]},
      {
        validator: Comprobacion('Contras', 'RepContra')});
  }

  get data() {
    return this.Nuevo_Perfil.controls;
  }

  Creacion() {
    this.submitted = true;

    if (this.Nuevo_Perfil.invalid) {
      return;
    }

    /*Utilizamos el sweetalert2 para asegurarnos de que el usuario quiere realizar la accion
    despues de saber que ha rellenado todos los campos correctamente*/

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡ Estos son los datos con los que crearas el perfil !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'
    }).then((result) => {
      if (result.isConfirmed) {
        //Crearmos el usuario aqui despues de confiamar que el usuario esta seguro de realizar la accion
        this.Nuevo = new Perfil(this.Nuevo_Perfil.value.Nombre,
          this.Nuevo_Perfil.value.Apellido,this.Nuevo_Perfil.value.Correo,
          this.Nuevo_Perfil.value.Contras,this.Nuevo_Perfil.value.Foto,
          this.Nuevo_Perfil.value.Edad,this.Nuevo_Perfil.value.Descripcion);
        this.nuevo.emit(this.Nuevo);

        Swal.fire(
          '¡Creado!',
          '',
          'success'
        )
      }
    })
  }

  //Boton encargado de volver a la pagina con la lista de Registros devolviendo un false
  Volver():void{
    this.volver.emit(false);
  }
}
