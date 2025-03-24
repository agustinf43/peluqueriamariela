import { Component, EventEmitter, OnInit, Output, viewChild } from '@angular/core'; // Importa Component y OnInit para crear el componente
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas comunes como *ngFor
import { listaServiciosService } from '../../services/listaServicios.service'; // Importa el servicio listaServiciosService
import { Servicio } from '../../modules/listaServicios'; // Importa la interfaz Servicio
import { RouterLink } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-servicios', // Define el selector del componente
  standalone: true, // Indica que este componente es standalone (no necesita un módulo)
  imports: [CommonModule, RouterLink,SlickCarouselModule, ], // Importa CommonModule para usar directivas como *ngFor
  templateUrl: './servicios.component.html', // Ruta al archivo de plantilla HTML
  styleUrl: './servicios.component.css', // Ruta al archivo de estilos CSS
  
})



export class ServiciosComponent implements OnInit {
  //funcionamiento del carrusel
  serviciosLista: Servicio[] = []; // Define una propiedad para almacenar la lista de servicios
  
  slideConfig={
    slidesToShow: 3, // Número de tarjetas visibles a la vez
    slidesToScroll: 1, // Número de tarjetas que se desplazan al avanzar
    autoplay: true, // Activa el autoplay
    autoplaySpeed: 2000, // Velocidad del autoplay en milisegundos (3 segundos)
    infinite: true, // Carrusel infinito
    arrows: false, // Oculta las flechas de navegación (opcional)
    responsive: [
      {
        breakpoint: 1024, // Pantallas medianas
        settings: {
          slidesToShow: 2, // Muestra 2 tarjetas
        },
      },
      {
        breakpoint: 768, // Pantallas pequeñas
        settings: {
          slidesToShow: 1, // Muestra 1 tarjeta
        },
      },
    ],
  }
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  prevImg(){
    this.slickModal.slickPrev();
  }
  nextImg(){
    this.slickModal.slickNext();
  }

  constructor(private svc: listaServiciosService) {} // Inyecta el servicio listaServiciosService
  
 


  ngOnInit(): void {
    this.loadServices();
    
  }

  loadServices(): void {
    this.svc.getListaDeServicios().subscribe({
      next: (data: Servicio[]) => {
        this.serviciosLista = data;
      },   error: (error) => {
        console.error('Error fetching salon services:', error);
        }
    });
  }

 




 

  // Define un evento de salida (`EventEmitter`) que se puede emitir desde este componente hacia el componente padre.
  @Output() mostrarPrecios = new EventEmitter<void>();


  // 1. Emite el evento `mostrarPrecios` para notificar al componente padre que se ha solicitado mostrar u ocultar los precios.
  // 2. Cambia el texto del botón entre 'Ver lista de Precios' y 'Cerrar lista' para reflejar la acción que se realizará al hacer clic en él.
  verPrecios() {
    this.mostrarPrecios.emit();

  }


 

  
  
}