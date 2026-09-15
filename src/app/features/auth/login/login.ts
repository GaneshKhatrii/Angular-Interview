import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth-service';
import { SnackbarService } from '../../../core/services/popups/snackbar-service';
import { FormsModule } from '@angular/forms';
import { IUserLoginResponse } from '../../../core/models/auth/userAuthModels';
import { ApiResponse } from '../../../core/models/common/commonModels';
@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private snackbarService = inject(SnackbarService);
  private router = inject(Router);
  hidePassword = signal<boolean>(true);

  togglePasswordVisibility(): void {
    this.hidePassword.update((value) => !value);
  }

  loginObj = {
    userName: '',
    password: '',
  };

  onLogin(form: any) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.authService.onLogin(form.control.value).subscribe({
      next: (res: ApiResponse<IUserLoginResponse>) => {
        localStorage.setItem('loginData', JSON.stringify(res.data));
        this.snackbarService.showSnackBar(res.message, 'success');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.snackbarService.showSnackBar(err, 'danger');
      },
    });
  }
}
