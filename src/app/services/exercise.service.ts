import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from '../models/ejercicio';
import { Observable } from 'rxjs';
import { environment } from '../env/environment.prod';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private baseUrl = environment.apiUrl;
  //private apiUrl = 'http://localhost:8080/api/exercises';

  constructor(private http: HttpClient) { }

  /* PARA GUARDADO EN BDD EN LOCAL
  saveExercise(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.post<Ejercicio>(this.apiUrl, ejercicio);
  }

  getExercises(): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(this.apiUrl);
  }
  */

  //Para utilizar railway
  saveExercise(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.post<Ejercicio>(`${this.baseUrl}/api/exercises`, ejercicio);
  }

  getExercises(): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.baseUrl}/api/exercises`);
  }
  
}
