import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  autorFiltro: string;
  length: number;
  id:string;

  constructor() { 
    this.autorFiltro = "";
    this.length = 0;
    this.id="0";
  }
  ngOnInit(): void {
    
  }

  @Output () newItem = new EventEmitter<String>();

  addNewAuthor(value: string){
    this.newItem.emit(this.autorFiltro +","+ this.id+","+this.length);
  }
}
