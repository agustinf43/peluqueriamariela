import { Component, EventEmitter, OnInit, Output } from '@angular/core'; // Importa Component y OnInit para crear el componente
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas comunes como *ngFor
import { listaServiciosService } from '../../services/listaServicios.service'; // Importa el servicio listaServiciosService
import { Servicio } from '../../modules/listaServicios'; // Importa la interfaz Servicio
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios', // Define el selector del componente
  standalone: true, // Indica que este componente es standalone (no necesita un módulo)
  imports: [CommonModule, ], // Importa CommonModule para usar directivas como *ngFor
  templateUrl: './servicios.component.html', // Ruta al archivo de plantilla HTML
  styleUrl: './servicios.component.css', // Ruta al archivo de estilos CSS
})
export class ServiciosComponent implements OnInit {


  // Define un evento de salida (`EventEmitter`) que se puede emitir desde este componente hacia el componente padre.
@Output() mostrarPrecios = new EventEmitter<void>();

textoBoton: string = 'Ver lista de Precios';

// Método que realiza dos acciones:
// 1. Emite el evento `mostrarPrecios` para notificar al componente padre que se ha solicitado mostrar u ocultar los precios.
// 2. Cambia el texto del botón entre 'Ver lista de Precios' y 'Cerrar lista' para reflejar la acción que se realizará al hacer clic en él.
verPrecios() {
  this.mostrarPrecios.emit();
  
  // Cambia el texto del botón dependiendo de su valor actual.
  if (this.textoBoton === 'Ver lista de Precios') {
    this.textoBoton = 'Cerrar lista';
  } else {
    this.textoBoton = 'Ver lista de Precios';
  }
}


  

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