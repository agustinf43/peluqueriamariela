import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path:'Bienvenido',
    loadComponent:() => import('./Componentes/navbar/navbar.component').then(m => m.NavbarComponent)
  },
  {
    path:'Servicios',
    loadComponent:() => import('./Componentes/servicios/servicios.component').then(m => m.ServiciosComponent)
  }, 
  {
    path:'Acerca-De',
    loadComponent:() => import('./Componentes/principal/principal.component').then(m => m.PrincipalComponent)
  },
  {
    path:'Galeria',
    loadComponent:() => import('./Componentes/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path:'Precios',
    loadComponent:() => import('./Componentes/precios/precios.component').then(m => m.PreciosComponent)
  },
  
  
  
  
 
];

