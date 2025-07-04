import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CaloriesRegisterService } from '../../services/calories-register.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-fit-track',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './home-fit-track.component.html',
  styleUrl: './home-fit-track.component.scss'
})
export class HomeFitTrackComponent implements OnInit {

  ultimaCaloria: { fecha: string, cantidad: number } | null = null;

  constructor(private caloriasService: CaloriesRegisterService) { }

  ngOnInit(): void {
    this.ultimaCaloria = this.caloriasService.obtenerUltimaCaloria();
  }

  readonly weekDays = [
    {day: "Lunes", color: "default", link:"#"},
    { day: "Martes", color: "default", link: "#" },
    { day: "Miercoles", color: "default", link: "#" },
    { day: "Jueves", color: "default", link: "#" },
    { day: "Viernes", color: "default", link: "#" },
    { day: "Sabado", color: "default", link: "#" }
  ];

}
