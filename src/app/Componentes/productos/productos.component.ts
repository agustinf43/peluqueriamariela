import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { Producto } from '../../modules/Productos';
import { listaProductosService } from '../../services/listadeProductos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SlickCarouselModule,CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

   slideConfig={
      slidesToShow: 3, // Número de tarjetas visibles a la vez
      slidesToScroll: 1, // Número de tarjetas que se desplazan al avanzar
      autoplay: true, // Activa el autoplay
      autoplaySpeed: 2000, // Velocidad del autoplay en milisegundos (3 segundos)
      infinite: true, // Carrusel infinito
      arrows: false, // Oculta las flechas de navegación (opcional)
      responsive: [
        {
          breakpoint: 1024, // Pantallas medianas
          settings: {
            slidesToShow: 2, // Muestra 2 tarjetas
          },
        },
        {
          breakpoint: 768, // Pantallas pequeñas
          settings: {
            slidesToShow: 1, // Muestra 1 tarjeta
          },
        },
      ],
    }




    @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
    prevImg(){
      this.slickModal.slickPrev();
    }
    nextImg(){
      this.slickModal.slickNext();
    }

    ngOnInit(): void {
      this.cargarProductos();
      
    }

    productosLista:Producto[]=[]

    constructor(private svcProducto : listaProductosService){}

     cargarProductos(): void {
        this.svcProducto.getListaDeProductos().subscribe({
          next: (data: Producto[]) => {
            this.productosLista = data;
          },   error: (error) => {
            console.error('Error fetching salon services:', error);
            }
        });
      }

}
