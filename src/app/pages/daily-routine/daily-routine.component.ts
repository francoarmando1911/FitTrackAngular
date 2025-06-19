import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExerciseService } from '../../services/exercise.service';

interface Exercise {
  id?: number;
  nombre: string;
  descripcion: string;
  grupoMuscular: string;
  // extras para frontend:
  name?: string;
  reps?: string;
  weight?: string;
  series?: string;
}

@Component({
  selector: 'app-daily-routine',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './daily-routine.component.html',
  styleUrl: './daily-routine.component.scss',
})
export class DailyRoutineComponent implements OnInit {
  openForm = true;
  day: string = '';
  exercises: Exercise[] = [];

  exerciseName = '';
  exerciseReps = '';
  exerciseWeight = '';
  exerciseSeries = '';
  editIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private exerciseService: ExerciseService
  ) { }

  ngOnInit(): void {
    this.day = this.route.snapshot.paramMap.get('day') || '';

    this.exerciseService.getExercises().subscribe((data: Exercise[]) => {
      // separo la descripcion para mostrarla como reps/peso/series
      this.exercises = data.map(e => {
        const partes = e.descripcion?.split('|') || ['', '', ''];
        return {
          ...e,
          name: e.nombre,
          reps: partes[0],
          weight: partes[1],
          series: partes[2],
        };
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

  addOrUpdateExercise(): void {
    if (
      this.exerciseName &&
      this.exerciseReps &&
      this.exerciseWeight &&
      this.exerciseSeries
    ) {
      const newExercise: Exercise = {
        nombre: this.exerciseName,
        descripcion: `${this.exerciseReps}|${this.exerciseWeight}|${this.exerciseSeries}`,
        grupoMuscular: 'General',
      };

      if (this.editIndex !== null) {
        // opcional: editar en el backend
        this.exercises[this.editIndex] = {
          ...newExercise,
          name: this.exerciseName,
          reps: this.exerciseReps,
          weight: this.exerciseWeight,
          series: this.exerciseSeries,
        };
        this.editIndex = null;
      } else {
        this.exerciseService.saveExercise(newExercise).subscribe((ej) => {
          this.exercises.push({
            ...ej,
            name: ej.nombre,
            reps: this.exerciseReps,
            weight: this.exerciseWeight,
            series: this.exerciseSeries,
          });
        });
      }

      this.exerciseName = '';
      this.exerciseReps = '';
      this.exerciseWeight = '';
      this.exerciseSeries = '';
    }
  }

  removeExercise(index: number): void {
    this.exercises.splice(index, 1);
  }

  editExercise(index: number): void {
    const exercise = this.exercises[index];
    this.exerciseName = exercise.name || '';
    this.exerciseReps = exercise.reps || '';
    this.exerciseWeight = exercise.weight || '';
    this.exerciseSeries = exercise.series || '';
    this.editIndex = index;
  }
}
