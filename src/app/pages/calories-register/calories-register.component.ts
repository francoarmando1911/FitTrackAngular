import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calories-register',
  templateUrl: './calories-register.component.html',
  styleUrls: ['./calories-register.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CaloriesRegisterComponent {
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
    localStorage.setItem('caloriesEntries', JSON.stringify(this.entries));
  }

  loadEntries() {
    const entries = localStorage.getItem('caloriesEntries');
    if (entries) {
      this.entries = JSON.parse(entries);
    }
  }
}