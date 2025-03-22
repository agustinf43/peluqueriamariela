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
  imports: [NavbarComponent,FooterComponent, RouterOutlet,CommonModule],
     
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peluqueriamariela';
  rutaActual:string="";

  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.rutaActual = event.url;
    });

  }
 
  esRutaNuevoComponente() {
    return this.rutaActual === '/Precios';
  }


}
