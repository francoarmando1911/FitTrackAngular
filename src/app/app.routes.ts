import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import LoginComponent from './api/auth/components/login/login.component';
import RegisterComponent from './api/auth/components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
        path: '**',
        redirectTo: ''
    }
];
