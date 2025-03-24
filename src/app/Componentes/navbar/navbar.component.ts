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

  

  ngOnInit(): void {
    
  }

  

}//termina la clase navbarComponent

