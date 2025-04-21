import { Component } from '@angular/core';
import { RegisterService } from '../../../../services/register.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {
  email: string = '';
  password: string = '';
  usuarios: any[] = [];
  mensaje: string = '';

  constructor(private registerService: RegisterService) { }

  registrarUsuario(): void {
    const nuevoUsuario = {
      email: this.email,
      password: this.password
    };

    this.registerService.registrarUsuario(nuevoUsuario).subscribe({
      next: (data) => {
        console.log('Usuario registrado:', data);
        this.mensaje = 'Registro exitoso';
      },
      error: (err) => {
        console.error('Error al registrar usuario:', err);
        this.mensaje = err.error?.message || err.error || 'Hubo un error al registrar el usuario';
      }
    });
  }
}

