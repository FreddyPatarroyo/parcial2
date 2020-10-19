import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelItem } from '../models/item.model';
import { ItemServices } from "../services/item.services";
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  listItem: ModelItem[];
  autorFiltro: string;
  
  constructor(private itemServices: ItemServices) {
    this.autorFiltro =FormularioComponent.name;
   }

  ngOnInit(): void {
    this.llenarLista();
  }

  async llenarLista(){
    await this.itemServices.getList().subscribe((res)=>{
      this.listItem = res;
      
      this.filtrar();
      console.log(this.listItem)
    });
  }

  public updateList(value: string){
    this.autorFiltro = value;
    this.llenarLista();
  }

  public filtrar(){
    let lista = [];

    for (let index = 0; index < this.listItem.length; index++) {
      if(this.listItem[index].author.includes(this.autorFiltro)){
        lista.push(this.listItem[index]);
      }
    }
    this.listItem = lista;
  }
}
