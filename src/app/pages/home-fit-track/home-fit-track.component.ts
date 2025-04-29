import { Component } from '@angular/core';

@Component({
  selector: 'app-home-fit-track',
  standalone: true,
  imports: [],
  templateUrl: './home-fit-track.component.html',
  styleUrl: './home-fit-track.component.scss'
})
export class HomeFitTrackComponent {

  readonly weekDays = [
    {day: "Lunes", color: "default", link:"#"},
    { day: "Martes", color: "default", link: "#" },
    { day: "Miercoles", color: "default", link: "#" },
    { day: "Jueves", color: "default", link: "#" },
    { day: "Viernes", color: "default", link: "#" },
    { day: "Sabado", color: "default", link: "#" }
  ];

}
