import { Component, OnInit } from '@angular/core'; // Importa Component y OnInit para crear el componente
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas comunes como *ngFor
import { listaServiciosService } from '../../services/listaServicios.service'; // Importa el servicio listaServiciosService
import { Servicio } from '../../modules/listaServicios'; // Importa la interfaz Servicio

@Component({
  selector: 'app-servicios', // Define el selector del componente
  standalone: true, // Indica que este componente es standalone (no necesita un módulo)
  imports: [CommonModule], // Importa CommonModule para usar directivas como *ngFor
  templateUrl: './servicios.component.html', // Ruta al archivo de plantilla HTML
  styleUrl: './servicios.component.css', // Ruta al archivo de estilos CSS
})
export class ServiciosComponent implements OnInit {
  serviciosLista: Servicio[] = []; // Define una propiedad para almacenar la lista de servicios

  constructor(private svc: listaServiciosService) {} // Inyecta el servicio listaServiciosService

  ngOnInit(): void {
    this.mostrarListaDeServicios(); // Llama al método para cargar la lista de servicios al inicializar el componente
  }

  // Método para obtener y mostrar la lista de servicios
  mostrarListaDeServicios(): void {
    this.svc.getListaDeServicios().subscribe({
      // Suscribe al Observable para obtener los datos
      next: (data) => {
        this.serviciosLista = data; // Asigna los datos recibidos a la propiedad serviciosLista
        console.log(JSON.stringify(this.serviciosLista)); // Muestra los datos en la consola (para depuración)
      },
      error: (error) => {
        console.error('Error al cargar la info', error); // Maneja errores en caso de que falle la solicitud
      },
    });
  }
}