import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calories',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './calories.component.html',
  styleUrl: './calories.component.scss'
})
export class CaloriesComponent {

}
