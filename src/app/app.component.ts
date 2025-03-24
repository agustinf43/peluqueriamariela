import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LayoutPrincipalComponent } from "./Componentes/layout-principal/layout-principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, CommonModule, LayoutPrincipalComponent],
     
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peluqueriamariela';
  rutaActual:string="";

  deberiaUsarRouterOutlet = true;
  rutasExcluidas = ['/Bienvenido','/Servicios','/Acerca-De','/Galeria',];

  


  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();


    // Detectar cambios de ruta para actualizar la lógica de visualización
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const rutaActual = event.urlAfterRedirects;
      
      // Comprueba si la ruta actual está en la lista de excluidas
      this.deberiaUsarRouterOutlet = !this.rutasExcluidas.some(ruta => 
        rutaActual === ruta || rutaActual.startsWith(ruta + '/')
      );
      
      // Si estamos en una ruta excluida, realizar scroll al elemento correspondiente
      if (!this.deberiaUsarRouterOutlet) {
        // Obtener el ID desde la ruta (por ejemplo, '/servicios' → 'servicios')
        const elementId = rutaActual.split('/')[1];
        this.scrollToElement(elementId);
      }
    });

    


  }
  

  scrollToElement(elementId: string) {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Pequeño retraso para asegurar que los componentes estén renderizados
  }
 
  esRutaNuevoComponente() {
    return this.rutaActual === '/Precios';
  }


}

