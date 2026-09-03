import { Routes } from '@angular/router';
import { AuthRoutes } from './features/auth/auth-routes';
import { AdminRoutes } from './features/admin/admin-routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: AuthRoutes,
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/admin-layout/admin-layout').then((c) => c.AdminLayout),
    children: AdminRoutes,
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/auth/page-not-found/page-not-found').then((c) => c.PageNotFound),
  },
];
