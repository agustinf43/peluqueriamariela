import { Routes } from '@angular/router';

import { ServiciosComponent } from './Componentes/servicios/servicios.component';

import { NavbarComponent } from './Componentes/navbar/navbar.component';




export const routes: Routes = [

  {path: 'Bienvenido', component: NavbarComponent},
  { path: 'servicios', component: ServiciosComponent },
  
  { path: '', redirectTo: 'Bienvenido', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: 'Bienvenido' } // Ruta comodín para manejar errores

 
];
