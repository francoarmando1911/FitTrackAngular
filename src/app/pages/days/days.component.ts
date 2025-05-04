import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-days',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './days.component.html',
  styleUrl: './days.component.scss'
})
export class DaysComponent {

  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

}
