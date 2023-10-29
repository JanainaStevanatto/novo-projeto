import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-root',
    template: `
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-data-binding></app-data-binding>
    <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>
    `


})

export class AppComponent implements OnInit {

    public destruir: boolean = true;
    public addValue: number = 0;

    public getDados: { nome: string, idade: number } | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

    public add() {
      this.addValue += 1;
    }

    public destruirComponent() {
      this.destruir = false;
    }

    public setDados(event: { nome: string, idade: number }) {
      this.getDados = event;
    }
  }
