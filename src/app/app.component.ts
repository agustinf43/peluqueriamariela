import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Componentes/navbar/navbar.component";
import { PrincipalComponent } from "./Componentes/principal/principal.component";
import { ServiciosComponent } from "./Componentes/servicios/servicios.component";
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from "./Componentes/galeria/galeria.component";
import { NovedadesComponent } from "./Componentes/novedades/novedades.component";
import { FooterComponent } from './Componentes/footer/footer.component';

import { PreciosComponent } from "./Componentes/precios/precios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PrincipalComponent, ServiciosComponent, CommonModule,
    GaleriaComponent, NovedadesComponent, FooterComponent, PreciosComponent, ],
     
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peluqueriamariela';

  ngOnInit(): void {
    initFlowbite();
  }
 
  //mostrar precios 
 // Variable booleana que controla si se deben mostrar los precios en la interfaz de usuario.
// Inicialmente está en `false`, lo que significa que los precios no se muestran al principio.
  mostrarPrecios = false;
// Método que alterna el valor de `mostrarPrecios` entre `true` y `false`.
// Si `mostrarPrecios` es `true`, lo cambia a `false`, y viceversa.
  togglePrecios() {
    this.mostrarPrecios = !this.mostrarPrecios;
  }


}
