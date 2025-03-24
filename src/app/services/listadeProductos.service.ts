import { Injectable } from '@angular/core'; // Importa el decorador Injectable para definir un servicio
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer solicitudes HTTP
import { Producto } from '../modules/Productos';
import { Observable } from 'rxjs'; // Importa Observable para manejar flujos de datos asíncronos

@Injectable({
  providedIn: 'root', // Define que este servicio estará disponible en toda la aplicación
})
export class listaProductosService {
  constructor(public http: HttpClient) {
   
  }

  // Método para obtener la lista de servicios desde un archivo JSON
  getListaDeProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>('./assets/data/listaProductos.json'); // Realiza una solicitud GET al archivo JSON
  }
}