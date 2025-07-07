import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  private apiUrl = 'http://localhost:8080/api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  loginUsuario(credentials: { email: string; password: string }): Observable<User> {
    const body = {
      username: credentials.email, // Backend espera "username"
      password: credentials.password
    };

    return this.http.post<{ user: User; token: string }>(`${this.apiUrl}/login`, body).pipe(
      tap(response => {
        this.currentUserSubject.next(response.user);
        localStorage.setItem('token', response.token);
      }),
      map(response => response.user),
      catchError(() => throwError(() => new Error('Credenciales inválidas')))
    );
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('token');
  }

  cargarUsuarioDesdeToken(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      this.http.get<User>(`${this.apiUrl}/me`, { headers }).subscribe({
        next: user => this.currentUserSubject.next(user),
        error: () => this.logout()
      });
    }
  }
}
