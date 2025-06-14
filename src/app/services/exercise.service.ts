import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private apiUrl = 'http://localhost:8080/api/exercises';

  constructor(private http: HttpClient) { }

  saveExercise(ejercicio: any) {
    return this.http.post(this.apiUrl, ejercicio);
  }

  getExercises() {
    return this.http.get(this.apiUrl);
  }
}