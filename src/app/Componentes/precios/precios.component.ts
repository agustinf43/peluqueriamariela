import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { precios } from '../../modules/Precios';
import { listaDePreciosService } from '../../services/listaDePrecios.service';

@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.css'
})
export class PreciosComponent {

  

  @Output() mostrarServicios = new EventEmitter<void>();
  
    verServicios() {
      this.mostrarServicios.emit();
    }

    //del servicio
     listaPrecios: precios []=[];
      
      constructor (private svcP : listaDePreciosService ){}
    
      ngOnInit(): void {
        this.mostrarPrecios();
    
      }
    
      mostrarPrecios() : void{
    
        this.svcP.getPrecios().subscribe({
          
          next: (data) => {
            this.listaPrecios = data; 
            console.log(JSON.stringify(this.listaPrecios)); 
          },
          error: (error) => {
            console.error('Error al cargar la info', error); 
          },
        });
    
      }
    

}
