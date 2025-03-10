import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { precios } from '../modules/Precios';

@Injectable({
 providedIn:'root',

})
export class listaDePreciosService{
    constructor (public http: HttpClient ){
    }
    getPrecios(): Observable <precios[]>{
        return this.http.get<precios[]>('./assets/data/listaDePrecios.json')
    }

}