import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor() { }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // NUEVO: Método para manejar el login desde el formulario.
  // Acepta credenciales y devuelve un Observable, como el componente espera.
  loginUsuario(credentials: { email: string; password: string }): Observable<User> {
    // En una app real, aquí harías una petición HTTP POST a tu backend.
    // Para simulación, comprobamos credenciales contra un usuario de prueba.
    if (credentials.email === 'jane.doe@example.com' && credentials.password === 'password123') {
      const mockUser: User = {
        id: 1,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        avatarUrl: 'https://i.pravatar.cc/150'
      };
      return of(mockUser).pipe(
        tap(user => {
          // Si el login es exitoso, actualizamos el BehaviorSubject.
          // Esto notificará a todos los componentes suscritos (como el perfil).
          this.currentUserSubject.next(user);
        })
      );
    } else {
      // Si las credenciales son incorrectas, devolvemos un error.
      return throwError(() => new Error('Credenciales inválidas'));
    }
  }

  // Simula el inicio de sesión
  login() {
    // En una aplicación real, aquí llamarías a tu backend para autenticar.
    // Por ahora, usamos datos de prueba.
    const mockUser: User = {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      avatarUrl: 'https://i.pravatar.cc/150' // Un avatar de ejemplo
    };
    this.currentUserSubject.next(mockUser);
  }

  // Simula el cierre de sesión
  logout() {
    // Elimina los datos del usuario del BehaviorSubject
    this.currentUserSubject.next(null);
    // En una aplicación real, también invalidarías el token en el backend si es necesario.
  }
}