import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiBackendService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080'; 

  getSaludo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/saludo`);
  }
}
