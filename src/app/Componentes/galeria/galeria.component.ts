import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Galeria } from '../../modules/Galeria';
import { imagenesService } from '../../services/imagenesDeGaleria.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  listaImagenes: Galeria []=[];
  
  constructor (private svcG : imagenesService ){}

  ngOnInit(): void {
    this.mostrarImagenes();

  }

  mostrarImagenes() : void{

    this.svcG.getImagenes().subscribe({
      
      next: (data) => {
        this.listaImagenes = data; 
        console.log(JSON.stringify(this.listaImagenes)); 
      },
      error: (error) => {
        console.error('Error al cargar la info', error); 
      },
    });

  }


}
