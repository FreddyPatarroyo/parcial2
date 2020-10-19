import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ModelItem } from "../models/item.model";

@Injectable ({
    providedIn: 'root'
})
export class ItemServices{

    constructor(private http: HttpClient){}

    public getList(): Observable<ModelItem[]>{
        return this.http.get <ModelItem[]> (`https://picsum.photos/v2/list`);
    }
}