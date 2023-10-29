import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {
  
  public nome: string = "Janaina";
  public idade: number = 29;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  
  constructor() { }
  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  

}
