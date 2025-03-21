import { Component } from '@angular/core';
import { NovedadesComponent } from "../novedades/novedades.component";
import { GaleriaComponent } from "../galeria/galeria.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { PrincipalComponent } from "../principal/principal.component";

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [NovedadesComponent, GaleriaComponent, ServiciosComponent, PrincipalComponent],
  templateUrl: './layout-principal.component.html',
  styleUrl: './layout-principal.component.css'
})
export class LayoutPrincipalComponent {

}
