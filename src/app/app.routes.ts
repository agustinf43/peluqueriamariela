import { Routes } from '@angular/router';
import { LayoutPrincipalComponent } from './Componentes/layout-principal/layout-principal.component';
import { AdministracionComponent } from './Componentes/administracion/administracion.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './Componentes/login-register/login-register.component';
import { AdminpreciosComponent } from './Componentes/administracion/adminprecios/adminprecios.component';
import { AdministrarProductosComponent } from './Componentes/administracion/administrar-productos/administrar-productos.component';
import { AdministrarTurnosComponent } from './Componentes/administracion/administrar-turnos/administrar-turnos.component';
import { AdministrarServiciosComponent } from './Componentes/administracion/administrar-servicios/administrar-servicios.component';


export const routes: Routes = [

  { path: '', redirectTo: '/PeluqueriaMariela', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { 
    path: 'administracion', 
    component: AdministracionComponent,
    canActivate: [authGuard],
    children: [
      { path: 'administrarPrecios', component: AdminpreciosComponent, canActivate: [authGuard] },
      { path: 'administrarProductos', component: AdministrarProductosComponent, canActivate: [authGuard] },
      { path: 'administrarServicios', component: AdministrarServiciosComponent, canActivate: [authGuard] },
      { path: 'administrarTurnos', component: AdministrarTurnosComponent, canActivate: [authGuard] },
    ],
  },

  { path: 'Bienvenido', loadComponent: () => import('./Componentes/navbar/navbar.component').then(m => m.NavbarComponent) },
  { path: 'Servicios', loadComponent: () => import('./Componentes/servicios/servicios.component').then(m => m.ServiciosComponent) },
  { path: 'Acerca-De', loadComponent: () => import('./Componentes/principal/principal.component').then(m => m.PrincipalComponent) },
  { path: 'Galeria', loadComponent: () => import('./Componentes/galeria/galeria.component').then(m => m.GaleriaComponent) },
  { path: 'Precios', loadComponent: () => import('./Componentes/precios/precios.component').then(m => m.PreciosComponent) },
  { path: 'PeluqueriaMariela', component: LayoutPrincipalComponent },
  
  { path: '**', redirectTo: '/PeluqueriaMariela' }

];
