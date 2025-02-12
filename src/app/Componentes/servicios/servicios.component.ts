import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
  
  constructor(private router: Router) {}

    
  verListaPrecios() {
    const url = this.router.serializeUrl( //se declara una constante y se almacena un URLtree convertido en string por serializeUrl
      this.router.createUrlTree(['/listadeprecios'])//crea un objeto UrlTree a partir de un array de segmentos de ruta.
    );
    console.log('URL generada:', url); // Verifica la URL en la consola
    window.open(url, '_blank');//Abre una pestaña nueva con la Url '/listadeprecios'
  }
  
}
