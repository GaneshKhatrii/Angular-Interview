import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register').then((c) => c.Register),
  },
  {
    path: 'pageNotFound',
    loadComponent: () => import('./page-not-found/page-not-found').then((c) => c.PageNotFound),
  },
];
