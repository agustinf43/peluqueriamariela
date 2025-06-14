import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';


@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [RouterOutlet,NavBarAdminComponent],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {

}
