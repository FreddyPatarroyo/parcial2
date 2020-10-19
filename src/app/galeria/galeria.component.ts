import { Component, OnInit } from '@angular/core';
import { ModelItem } from '../models/item.model';
import { ItemServices } from "../services/item.services";


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  listItem: ModelItem[];
  autorFiltro: string;
  pagFiltro: string;
  size : string;
  mensaje: boolean;
  
  constructor(private itemServices: ItemServices) {
    this.size="";
    this.pagFiltro ="0";
    this.autorFiltro=null;
    this.mensaje = false;
  
   }

  ngOnInit(): void {
    this.llenarLista();
  }

  async llenarLista(){
    await this.itemServices.getList().subscribe((res)=>{
      this.listItem = res;
      this.filtrar();
    });
  }

  public updateList(value: string){
    let entradas = value.split(',');
    this.autorFiltro = entradas[0];
    this.pagFiltro = entradas[1];
    this.size = entradas[2];
    this.llenarLista();
  }

  public filtrar(){
    let lista = [];
    let tempSize = this.listItem.length;
    let count = 0;

    if(this.pagFiltro == "" ||this.pagFiltro == null ){
      this.pagFiltro ="0";
    }
    count = parseInt(this.pagFiltro);

    if(parseInt(this.size) > 0){
      tempSize = parseInt(this.size);
      count = tempSize
      count = parseInt(this.pagFiltro)*tempSize;
    }
    
    if(count+tempSize<30 || count > 0){

      this.mensaje = false;
      for (let index = 0; index < tempSize; index++) {
        if(this.autorFiltro!=null &&this.listItem[index+count].author.includes(this.autorFiltro)){
          lista.push(this.listItem[index+count]);
        }else if(this.autorFiltro==null){
          lista.push(this.listItem[index+count]);
        }
      }
      this.listItem = lista;
    }else {
      this.mensaje = true;
    }
  }
}
