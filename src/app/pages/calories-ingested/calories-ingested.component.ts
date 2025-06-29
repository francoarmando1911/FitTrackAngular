import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calories-ingested',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calories-ingested.component.html',
  styleUrl: './calories-ingested.component.scss'
})
export class CaloriesIngestedComponent {
  date: string = '';
  calories: number | null = null;
  entries: { date: string; calories: number }[] = [];

  constructor() {
    this.loadEntries();
  }

  addEntry() {
    if (this.date && this.calories && this.calories > 0) {
      this.entries.push({ date: this.date, calories: this.calories });
      this.saveEntries();
      this.date = '';
      this.calories = null;
    }
  }

  removeEntry(index: number) {
    this.entries.splice(index, 1);
    this.saveEntries();
  }

  saveEntries() {
    localStorage.setItem('caloriesIngested', JSON.stringify(this.entries));
  }

  loadEntries() {
    const entries = localStorage.getItem('caloriesIngested');
    if (entries) {
      this.entries = JSON.parse(entries);
    }
  }
}
