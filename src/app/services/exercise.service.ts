import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from '../models/ejercicio';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private apiUrl = 'http://localhost:8080/api/exercises';

  constructor(private http: HttpClient) { }

  saveExercise(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.post<Ejercicio>(this.apiUrl, ejercicio);
  }

  getExercises(): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(this.apiUrl);
  }
}
