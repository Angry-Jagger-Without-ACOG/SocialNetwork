import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Perfil } from 'src/app/Models/Perfil.model';

@Component({
  selector: 'app-detalles-usuarios',
  templateUrl: './detalles-usuarios.component.html',
  styleUrls: ['./detalles-usuarios.component.css']
})

export class DetallesUsuariosComponent implements OnInit {

  @Input() PerfilSelecionado:Perfil;
  @Output() Retornar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  Volver():void{
    this.Retornar.emit(null);
  }

}
