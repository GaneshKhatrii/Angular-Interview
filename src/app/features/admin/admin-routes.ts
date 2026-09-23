import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard),
    children: [
      {
        path: 'employees',
        loadComponent: () =>
          import('./pages/employees-list/employees-list').then((c) => c.EmployeesList),
      },
    ],
  },
];
