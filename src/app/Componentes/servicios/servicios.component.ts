import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { listaServiciosService } from '../../services/listaServicios.service'; 
import { Servicio } from '../../modules/listaServicios';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})

export class ServiciosComponent implements OnInit {
  
  serviciosLista: Servicio[]=[]; 
  
  constructor(private svc: listaServiciosService){}

  ngOnInit(): void {
    this.mostrarListaDeServicios();
  }

  mostrarListaDeServicios(): void {
    this.svc.getListaDeServicios().subscribe({
      next: (data) => {
        this.serviciosLista = data;
        console.log(JSON.stringify( this.serviciosLista));
      },
      error: (error) => {
        console.error('Error al cargar la info', error);
      },
    });
  }


}
