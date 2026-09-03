import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard').then((c) => c.Dashboard),
  },
];
