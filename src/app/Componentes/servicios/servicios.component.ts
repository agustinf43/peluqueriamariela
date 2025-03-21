import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core'; // Importa Component y OnInit para crear el componente
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar directivas comunes como *ngFor
import { listaServiciosService } from '../../services/listaServicios.service'; // Importa el servicio listaServiciosService
import { Servicio } from '../../modules/listaServicios'; // Importa la interfaz Servicio
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-servicios', // Define el selector del componente
  standalone: true, // Indica que este componente es standalone (no necesita un módulo)
  imports: [CommonModule, RouterLink, ], // Importa CommonModule para usar directivas como *ngFor
  templateUrl: './servicios.component.html', // Ruta al archivo de plantilla HTML
  styleUrl: './servicios.component.css', // Ruta al archivo de estilos CSS
  animations: [
    trigger('slideAnimation', [
      // Definimos estados para las diapositivas
      state('current', style({ 
        transform: 'translateX(0)',
        opacity: 1 
      })),
      state('next', style({ 
        transform: 'translateX(100%)',
        opacity: 0 
      })),
      state('prev', style({ 
        transform: 'translateX(-100%)',
        opacity: 0 
      })),
      
      // Transiciones entre estados
      transition('* => current', [
        animate('400ms ease-in-out')
      ]),
      transition('current => next, current => prev', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class ServiciosComponent implements OnInit {
  //funcionamiento del carrusel
  serviciosLista: Servicio[] = []; // Define una propiedad para almacenar la lista de servicios

  constructor(private svc: listaServiciosService, private cdr: ChangeDetectorRef) {
    
  } // Inyecta el servicio listaServiciosService
  
  currentIndex = 0;
  itemsPerSlide = 3;
  totalSlides = 0;
  slideState = 'current'; 
  // Estado inicial de la diapositiva


  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.svc.getListaDeServicios().subscribe({
      next: (data: Servicio[]) => {
        this.serviciosLista = data;
        this.totalSlides = Math.ceil(this.serviciosLista.length / this.itemsPerSlide);
      },
      error: (error) => {
        console.error('Error fetching salon services:', error);
      }
    });
  }

  get currentSlideServices(): Servicio[] {
    const startIndex = this.currentIndex * this.itemsPerSlide;
    return this.serviciosLista.slice(startIndex, startIndex + this.itemsPerSlide);
  }

  nextSlide(): void {
    // Animamos primero la transición de salida
    this.slideState = 'next';
    
    // Después de un pequeño retraso, cambiamos el índice y restauramos el estado
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      this.slideState = 'current';
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }, 400); // Este tiempo debe coincidir con la duración de la animación
  }
  
  prevSlide(): void {
    // Animamos primero la transición de salida
    this.slideState = 'prev';
    
    // Después de un pequeño retraso, cambiamos el índice y restauramos el estado
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      this.slideState = 'current';
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }, 400); // Este tiempo debe coincidir con la duración de la animación
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.totalSlides && index !== this.currentIndex) {
      // Determinamos si vamos hacia adelante o hacia atrás
      this.slideState = index > this.currentIndex ? 'next' : 'prev';
      
      // Después de un pequeño retraso, cambiamos el índice y restauramos el estado
      setTimeout(() => {
        this.currentIndex = index;
        this.slideState = 'current';
        this.cdr.detectChanges(); // Forzar la detección de cambios
      }, 400); // Este tiempo debe coincidir con la duración de la animación
    }
  }


  // Define un evento de salida (`EventEmitter`) que se puede emitir desde este componente hacia el componente padre.
  @Output() mostrarPrecios = new EventEmitter<void>();

  textoBoton: string = 'Ver lista de Precios';


  // 1. Emite el evento `mostrarPrecios` para notificar al componente padre que se ha solicitado mostrar u ocultar los precios.
  // 2. Cambia el texto del botón entre 'Ver lista de Precios' y 'Cerrar lista' para reflejar la acción que se realizará al hacer clic en él.
  verPrecios() {
    this.mostrarPrecios.emit();

    // Cambia el texto del botón dependiendo de su valor actual.
    if (this.textoBoton == 'Ver lista de Precios') {
    this.textoBoton = 'Cerrar lista';
    } else {
    this.textoBoton = 'Ver lista de Precios';
    }
  }


  

  
  
}