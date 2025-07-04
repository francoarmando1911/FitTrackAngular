// calories-register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaloriesRegisterService, CaloriaEntry } from '../../services/calories-register.service';

@Component({
  selector: 'app-calories-register',
  standalone: true,
  templateUrl: './calories-register.component.html',
  styleUrls: ['./calories-register.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CaloriesRegisterComponent {
  date: string = '';
  calories: number | null = null;
  entries: CaloriaEntry[] = [];

  constructor(private service: CaloriesRegisterService) {
    this.service.entries$.subscribe(entries => {
      this.entries = entries;
    });
  }

  addEntry() {
    if (this.date && this.calories && this.calories > 0) {
      const entry: CaloriaEntry = { date: this.date, calories: this.calories };
      this.service.addEntry(entry);
      this.date = '';
      this.calories = null;
    }
  }

  removeEntry(index: number) {
    this.service.removeEntry(index);
  }
}
