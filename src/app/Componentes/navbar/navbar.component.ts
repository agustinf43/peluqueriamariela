import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  

  //para navegar en la pagina
  navegarAlComponente(ComponenteId: string): void {
    const element = document.getElementById(ComponenteId);
    if (element) {
      element.scrollIntoView({ behavior:'smooth'});
    }
  }

  mostrarMensaje(){
    alert("Proximamente")
  }

  //ocultar barra de navegacion

  isFixed = false; // Controla si la barra está fija
  isVisible = true; // Controla si la barra es visible
  private scrollThreshold = 1; // Punto de scroll para fijar la barra
  private lastScrollPosition = 0; // Última posición del scroll

  private colorActual=""

  private color1=false;
  private color2=false; 

  ngOnInit(): void {
    this.lastScrollPosition = window.scrollY; // Inicializa la posición del scroll
  }

  // Escucha el evento de scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollPosition = window.scrollY;

    // Fija la barra si el scroll supera el limite
    this.isFixed = currentScrollPosition > this.scrollThreshold;

    // Oculta la barra al hacer scroll hacia abajo
    if (currentScrollPosition > this.lastScrollPosition) {
      this.isVisible = false;
    } else {
      // Muestra la barra al hacer scroll hacia arriba
      this.isVisible = true;
    }

    this.lastScrollPosition = currentScrollPosition; // Actualiza la última posición del scroll

    if (currentScrollPosition > 100 ){
      this.color1=true
    }
    



  }

  // Escucha el movimiento del mouse para mostrar la barra
  @HostListener('window:mousemove', [])
  onMouseMove(): void {
    this.isVisible = true;
  }

}//termina la clase navbarComponent

