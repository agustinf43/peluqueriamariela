import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  
  servicios=[
    {
      nombre:"Corte De Cabello",
      imagen:"/assets/img/servicios/fotoCortes.jpg",
      alt:"imagen de Servicio de Cortes de pelo",
      descripcion:"Renueva tu estilo con nuestro corte de cabello profesional."

    },{
      nombre:"Pintura",
      imagen:"/assets/img/servicios/fotoPintura.jpg",
      alt:"imagen de Servicio de Pintura",
      descripcion:"Transforma tu estilo con nuestro servicio de pintura."
      
    },{
      nombre:"Peinados",
      imagen:"/assets/img/servicios/fotoPeinado.jpg",
      alt:"Imagen de Servicio de Peinados",
      descripcion:"Prepárate para brillar con nuestros peinados para ocasiones especiales."
    }

  ]
   
  
}
