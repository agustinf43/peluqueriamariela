import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet, CommonModule,],
     
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peluqueriamariela';
  rutaActual:string="";

  
  

  


  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();

    // Detectar cambios de ruta para actualizar la lógica de visualización
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.rutaActual = event.url;
      
      const rutaActual = event.urlAfterRedirects;
      
    });

    

   

  }
  

 
esRutaNuevoComponente() {
  if(this.rutaActual === "/administracion"){
    return true;
  } else if(this.rutaActual === "/login"){
    return true;
  } else if(this.rutaActual === "/Precios"){
    return true;
  } else if(this.rutaActual === "/administracion/administrarPrecios"){
    return true;
  } else if(this.rutaActual === "/administracion/administrarProductos"){
    return true;
  } else if(this.rutaActual === "/administracion/administrarServicios"){
    return true;
  } else if(this.rutaActual === "/administracion/administrarTurnos"){
    return true;
  }
   else {
    return false;
  }
}

}