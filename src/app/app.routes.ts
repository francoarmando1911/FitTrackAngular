import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import LoginComponent from './api/auth/components/login/login.component';
import RegisterComponent from './api/auth/components/register/register.component';
import { HomeFitTrackComponent } from './pages/home-fit-track/home-fit-track.component';  
import { DailyRoutineComponent } from './pages/daily-routine/daily-routine.component';
import { DaysComponent } from './pages/days/days.component';
import { DayPickerComponent } from './pages/day-picker/day-picker.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home-fit-track',
        component: HomeFitTrackComponent
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./api/auth/components/login/login.component').then(() => LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./api/auth/components/register/register.component').then(() => RegisterComponent),
    },
    {
        path: 'days-component',
        component: DaysComponent
    },
    {
        path: 'daily-routine/:day',
        component: DailyRoutineComponent,
        data: { renderMode: 'dynamic' }
    },
    {
        path: 'daily-picker-component',
        component: DayPickerComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

