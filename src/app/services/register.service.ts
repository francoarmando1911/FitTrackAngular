import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/register';  

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: { email: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, usuario);  
  }
}
