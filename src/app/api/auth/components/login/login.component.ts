import { Component } from '@angular/core';
import { RegisterService } from '../../../../services/register.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  username: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private loginService: LoginService){}

  loginUsuario(): void {
    const enterUsuario = {
      username: this.username,
      password: this.password
    };

    this.loginService.loginUsuario(enterUsuario).subscribe({
      next: (data) => {
        console.log('Usuario logueado correctamente', data);
        this.mensaje = 'Logueo exitoso';
      },
      error: (err) => {
        console.log('Eror al registrar el usuario:', err);
        this.mensaje = err.error?.message || err.error || 'Hubo un error al registrar el usuario';
      }
    });
  }
}
