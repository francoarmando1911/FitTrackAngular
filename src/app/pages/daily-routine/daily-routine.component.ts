import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';

interface Exercise {
  name: string;
  reps: string;
  weight: string;
  series: string;
}

@Component({
  selector: 'app-daily-routine',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './daily-routine.component.html',
  styleUrl: './daily-routine.component.scss'
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

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.day = this.route.snapshot.paramMap.get('day') || '';

    const storedExercises = localStorage.getItem(this.day);
    if (storedExercises) {
      this.exercises = JSON.parse(storedExercises);
    }
  }

  goBack(): void {
    this.location.back();
  }

  saveExercises(): void {
    localStorage.setItem(this.day, JSON.stringify(this.exercises));
  }

  addOrUpdateExercise(): void {
    if (this.exerciseName && this.exerciseReps && this.exerciseWeight && this.exerciseSeries) {
      const newExercise: Exercise = {
        name: this.exerciseName,
        reps: this.exerciseReps,
        weight: this.exerciseWeight,
        series: this.exerciseSeries,
      };

      if (this.editIndex !== null) {
        this.exercises[this.editIndex] = newExercise;
        this.editIndex = null;
      } else {
        this.exercises.push(newExercise);
      }

      this.exerciseName = '';
      this.exerciseReps = '';
      this.exerciseWeight = '';
      this.exerciseSeries = '';

      this.saveExercises();
    }
  }

  removeExercise(index: number): void {
    this.exercises.splice(index, 1);
    this.saveExercises();
  }

  editExercise(index: number): void {
    const exercise = this.exercises[index];
    this.exerciseName = exercise.name;
    this.exerciseReps = exercise.reps;
    this.exerciseWeight = exercise.weight;
    this.exerciseSeries = exercise.series;
    this.editIndex = index;
  }
}
