import { Component, OnInit } from '@angular/core';
import { EfetivoService } from './efetivo.service';


class Efetivo {
  id: number;
  nome: string;
  fone: string;
}

@Component({
  selector: 'app-efetivo-lista',
  templateUrl: './efetivo-lista.component.html',
  styleUrls: ['./efetivo-lista.component.css']
})


export class EfetivoListaComponent implements OnInit {

  efetivo = new Efetivo();
  efetivos = [];

  constructor(private service: EfetivoService) { }

  ngOnInit(): void {}

  
  editar(id: number) {
    for (const e of this.efetivos) {
      console.log(e);
    }
  }

}
