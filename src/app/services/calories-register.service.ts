import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CaloriaEntry {
  date: string;
  calories: number;
}

@Injectable({
  providedIn: 'root'
})
export class CaloriesRegisterService {
  private entriesSubject = new BehaviorSubject<CaloriaEntry[]>(this.loadEntries());
  entries$ = this.entriesSubject.asObservable();

  private loadEntries(): CaloriaEntry[] {
    const stored = localStorage.getItem('caloriesEntries');
    return stored ? JSON.parse(stored) : [];
  }

  private saveEntries(entries: CaloriaEntry[]) {
    localStorage.setItem('caloriesEntries', JSON.stringify(entries));
    this.entriesSubject.next(entries); // 🔄 actualiza los suscriptores
  }

  addEntry(entry: CaloriaEntry) {
    const updated = [...this.entriesSubject.value, entry];
    this.saveEntries(updated);
  }

  removeEntry(index: number) {
    const updated = [...this.entriesSubject.value];
    updated.splice(index, 1);
    this.saveEntries(updated);
  }

  getEntries(): CaloriaEntry[] {
    return this.entriesSubject.value;
  }

  getUltimaCaloria(): CaloriaEntry | null {
    const list = this.entriesSubject.value;
    return list.length > 0 ? list[list.length - 1] : null;
  }
}
