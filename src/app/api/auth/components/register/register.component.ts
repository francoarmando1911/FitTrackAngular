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
  username: string = '';
  password: string = '';
  role: string = 'USER';
  usuarios: any[] = [];
  mensaje: string = '';

  constructor(private registerService: RegisterService) { }

  registrarUsuario(): void {
    const nuevoUsuario = {
      username: this.username, 
      password: this.password,
      role: this.role 
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

