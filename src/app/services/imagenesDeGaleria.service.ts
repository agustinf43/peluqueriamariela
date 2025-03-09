import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Galeria } from '../modules/Galeria';
import { Observable } from 'rxjs';


@Injectable({
 providedIn:'root',

})
export class imagenesService{
    constructor (public http: HttpClient ){
    }
    getImagenes(): Observable <Galeria[]>{
        return this.http.get<Galeria[]>('./assets/data/imagenesGaleria.json')
    }

}