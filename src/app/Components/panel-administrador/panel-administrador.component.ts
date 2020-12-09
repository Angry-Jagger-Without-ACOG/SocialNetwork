import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Models/Usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styleUrls: ['./panel-administrador.component.css']
})
export class PanelAdministradorComponent implements OnInit {

  Usuarios: Usuarios [] = [];
  usuarioSeleccionado = null;

  

  constructor() {
    this.Llenar_Usuarios();
   }

  ngOnInit(): void {
    
  }

  Llenar_Usuarios(){
    this.Usuarios.push(new Usuarios("Marc", "Valdivia", "marcvaldiiprim@gmail.com","mv123",20,"Brazos Rotos"));
    this.Usuarios.push(new Usuarios("David", "Alba", "davidalba@gmail.com","da123",22,"Me llamo david"));
    this.Usuarios.push(new Usuarios("Cristian", "Tortosa", "@gmail.com","ct123",25,"Me llamo Cristian"));
    this.Usuarios.push(new Usuarios("Gerard", "Rey", "gerardRey@gmail.com","gr123",20,"Me llamo gerard"));
    this.Usuarios.push(new Usuarios("Aida", "Jesus", "ajesus@gmail.com","aj123",21,"Me llamo aida"));
  }

  getPerfiles(Usuario: Usuarios)  {
    
    this.usuarioSeleccionado = Usuarios;

  }

  BorrarUsuario(i: number){
    

    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras volver atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrala!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Usuarios.splice(i,1);
        Swal.fire(
          'Borrada!',
          'El usuario ha sido borrado.',
          'success'
        )
      }
    })


  }



  
  


}
