import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelItem } from '../models/item.model';
import { ItemServices } from "../services/item.services";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  listItem: ModelItem[];
  
  constructor(private itemServices: ItemServices) { }

  ngOnInit(): void {
    this.llenarLista();
  }

  llenarLista(){
    this.itemServices.getList().subscribe((res)=>{
      this.listItem = res;
    });
  }

}
