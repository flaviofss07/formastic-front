import { Component, OnInit } from '@angular/core';
import { EfetivoService } from './efetivo.service';
import { NgForm } from '@angular/forms';

class Efetivo {
  id: number;
  nome: string;
  fone: string;
}
@Component({
  selector: 'app-efetivo',
  templateUrl: './efetivo.component.html',
  styleUrls: ['./efetivo.component.css']
})
export class EfetivoComponent implements OnInit {

  efetivo = new Efetivo();
  efetivos = [];

  constructor(private service: EfetivoService) { }

  ngOnInit(): void {
    this.buscaEfetivos();
  }

  buscaEfetivos(){
    this.service.buscaTodos().then(dados => {
      this.efetivos = dados;
    });
  }

  salvar(formEfetivo: NgForm) {
    this.efetivo.nome = formEfetivo.value.nome;
    this.efetivo.fone = formEfetivo.value.fone;

    this.service.salvaEfetivo(this.efetivo).then(e => {
      this.buscaEfetivos();
    });

    this.efetivo = new Efetivo();
  }
}
