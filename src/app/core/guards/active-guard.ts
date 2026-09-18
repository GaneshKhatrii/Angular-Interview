import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SnackbarService } from '../services/popups/snackbar-service';

export const activeGuard: CanActivateFn = (route, state) => {
  const snackbarService = inject(SnackbarService);
  const router = inject(Router);
  const userData = localStorage.getItem('loginData');
  if (userData) {
    const parsedData = JSON.parse(userData);
    if (parsedData?.token) {
      return true;
    }
  }

  snackbarService.showSnackBar('Please login again', 'danger');
  router.navigate(['/login']);
  return false;
};
