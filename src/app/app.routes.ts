import { Routes } from '@angular/router';

export const routes: Routes = [



  {
    path:'galeria',
    loadComponent:() => import('./Componentes/galeria/galeria.component').then(m =>m.GaleriaComponent)

  },
  {
    path:'novedades',
    loadComponent:() => import('./Componentes/novedades/novedades.component').then(m =>m.NovedadesComponent)

  },
  {
    path:'principal',
    loadComponent:() => import('./Componentes/principal/principal.component').then(m =>m.PrincipalComponent)

  },
  {
    path:'productos',
    loadComponent:() => import('./Componentes/productos/productos.component').then(m =>m.ProductosComponent)

  },
  {
    path:'servicios',
    loadComponent:() => import('./Componentes/servicios/servicios.component').then(m =>m.ServiciosComponent)

  },
  {
    path:'tips',
    loadComponent:() => import('./Componentes/tips/tips.component').then(m =>m.TipsComponent)

  },  
  {
        path:'listaDePrecios',
        loadComponent:() => import('./Componentes/listadeprecios/listadeprecios.component').then(m =>m.ListadepreciosComponent)
  
      },{
        path:'**',
        loadComponent:() => import('./Componentes/principal/principal.component').then(m => m.PrincipalComponent)
      },
];
