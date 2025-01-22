import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  private apiUrl = 'http://localhost:3000/api/dbturnos';

  constructor(private http: HttpClient) { }

  obtenerTurnos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  crearTurno(turno: any): Observable<any> {
    return this.http.post(this.apiUrl, turno);
  }

  actualizarTurno(turno: any): Observable<any> {
    return this.http.put(this.apiUrl, turno);
  }

  eliminarTurno(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}