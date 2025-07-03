import { Routes } from '@angular/router';
import LoginComponent from './api/auth/components/login/login.component';
import RegisterComponent from './api/auth/components/register/register.component';
import { HomeFitTrackComponent } from './pages/home-fit-track/home-fit-track.component';
import { DailyRoutineComponent } from './pages/daily-routine/daily-routine.component';
import { DaysComponent } from './pages/days/days.component';
import { DayPickerComponent } from './pages/day-picker/day-picker.component';
import { CaloriesComponent } from './pages/calories/calories.component';
import { CaloriesRegisterComponent } from './pages/calories-register/calories-register.component';
import { CaloriesIngestedComponent } from './pages/calories-ingested/calories-ingested.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
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

    },
    {
        path: 'daily-picker-component',
        component: DayPickerComponent
    },
    {
        path: 'calories-component',
        component: CaloriesComponent
    },
    {
        path:'calories-register',
        component: CaloriesRegisterComponent
    },
    {
        path: 'calories-ingested',
        component: CaloriesIngestedComponent
    },
    {
        path: 'profile-component',
        component: ProfileComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

