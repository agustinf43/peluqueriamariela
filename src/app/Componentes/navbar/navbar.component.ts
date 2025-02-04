import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  navegarAlComponente(ComponenteId: string): void {
    const element = document.getElementById(ComponenteId);
    if (element) {
      element.scrollIntoView({ behavior:'smooth'});
    }
  }

  mostrarMensaje(){
    alert("Proximamente")
  }



  

}//termina la clase navbarComponent

