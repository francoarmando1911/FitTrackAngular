import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaloriesRegisterService {
  private calorias: { fecha: string, cantidad: number }[] = [];

  agregarCaloria(cantidad: number) {
    const fecha = new Date().toLocaleDateString();
    this.calorias.push({ fecha, cantidad });
  }

  obtenerUltimaCaloria() {
    return this.calorias[this.calorias.length - 1];
  }

  // o si querés observable
  getCalorias(): Observable<any[]> {
    return of(this.calorias);
  }
}
