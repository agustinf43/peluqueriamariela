import { Injectable } from '@angular/core'; // Importa el decorador Injectable para definir un servicio
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer solicitudes HTTP
import { Servicio } from '../modules/listaServicios'; // Importa la interfaz Servicio
import { Observable } from 'rxjs'; // Importa Observable para manejar flujos de datos asíncronos

@Injectable({
  providedIn: 'root', // Define que este servicio estará disponible en toda la aplicación
})
export class listaServiciosService {
  constructor(public http: HttpClient) {
   
  }

  // Método para obtener la lista de servicios desde un archivo JSON
  getListaDeServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>('./assets/data/listaDeServicios.json'); // Realiza una solicitud GET al archivo JSON
  }
}