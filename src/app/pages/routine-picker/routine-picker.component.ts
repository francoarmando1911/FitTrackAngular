import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-routine-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routine-picker.component.html',
  styleUrl: './routine-picker.component.scss'
})
export class RoutinePickerComponent {
  daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  selectedDay: string | null = null;

  rutinas: Record<string, string[]> = {
    'Lunes': ['Sentadillas', 'Press banca', 'Abdominales'],
    'Martes': ['Remo con barra', 'Curl de bíceps', 'Planchas'],
    'Miércoles': ['Zancadas', 'Elevaciones laterales', 'Flexiones'],
    'Jueves': ['Peso muerto', 'Dominadas', 'Crunch'],
    'Viernes': ['Cardio', 'Burpees', 'Escalador'],
    'Sábado': ['Estiramiento', 'Yoga', 'Caminata suave']
  };

  goToRoutine(day: string) {
    this.selectedDay = day;
  }
}


