import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
export type ToastType = 'success' | 'danger' | 'warning' | 'info';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private matSnackBar = inject(MatSnackBar);
  showSnackBar(message: string, type: ToastType = 'success') {
    this.matSnackBar.open(message, 'Close', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: `toast-${type}`,
    });
  }
}
