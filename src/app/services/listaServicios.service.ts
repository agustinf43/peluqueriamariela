import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../modules/listaServicios';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class listaServiciosService {
    
    constructor(public http : HttpClient){
        this.getListaDeServicios;
    }
 
    getListaDeServicios():Observable <Servicio[]>{

        return this.http.get <Servicio[]>("./assets/data/listaDeServicios.json");

    }


}
