import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService, User } from '../../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onLogin(): void {
    const enterUsuario = {
      email: this.email,
      password: this.password
    };

    this.loginService.loginUsuario(enterUsuario).subscribe({
      next: (data: User) => {
        console.log('Usuario logueado correctamente', data);
        this.mensaje = 'Logueo exitoso';
        this.router.navigate(['/profile']);
      },
      error: (err: Error) => {
        console.error('Error al iniciar sesión:', err);
        this.mensaje = `Error: ${err.message}`;
      }
    });
  }
}