import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Componentes/navbar/navbar.component";
import { PrincipalComponent } from "./Componentes/principal/principal.component";
import { ServiciosComponent } from "./Componentes/servicios/servicios.component";
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from "./Componentes/galeria/galeria.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PrincipalComponent, ServiciosComponent, CommonModule, GaleriaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peluqueriamariela';

  ngOnInit(): void {
    initFlowbite();
  }
}
