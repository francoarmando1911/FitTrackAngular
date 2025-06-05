import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day-picker.component.html',
  styleUrls: ['./day-picker.component.scss']
})
export class DayPickerComponent {
  daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  constructor(private router: Router) { }

  goToRoutine(day: string) {
    this.router.navigate(['/daily-routine', day]);
  }
}
