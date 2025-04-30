// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/admin/authService.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login-register.component.html',
  standalone:true,
  imports:[FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';
  password = '';
  isRegistering = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  loginOrRegister() {
    this.error = '';
    if (this.isRegistering) {
      const success = this.auth.register(this.username, this.password);
      if (success) {
        alert('Usuario registrado correctamente. Ahora podés iniciar sesión.');
        this.isRegistering = false;
        this.username = '';
        this.password = '';
      } else {
        this.error = 'El usuario ya existe.';
      }
    } else {
      const success = this.auth.login(this.username, this.password);
      if (success) {
        const role = this.auth.getRole();
        this.router.navigate([role === 'admin' ? '/administracion' : '']);
      } else {
        this.error = 'Usuario o contraseña incorrectos.';
      }
    }
  }

  toggleMode() {
    this.isRegistering = !this.isRegistering;
    this.error = '';
    this.username = '';
    this.password = '';
  }
}
