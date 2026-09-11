import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SnackbarService } from '../../../core/services/popups/snackbar-service';
import { AuthService } from '../../../core/services/auth/auth-service';
import { IUserRegisterResponse } from '../../../core/models/auth/userAuthModels';
import { passwordMatchValidator } from '../../../core/validators/passwordMatchValidator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule, MatInput, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  registerForm!: FormGroup;
  private fb = inject(FormBuilder);
  private snackbarService = inject(SnackbarService);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group(
      {
        UserName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        Role: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
        CompanyContactNo: [
          '',
          [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')],
        ],
        CompanyEmailId: ['', [Validators.required, Validators.email]],
        Password: ['', [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ['', [Validators.required]],
        CompanyName: ['', [Validators.required]],
        CompanyFullAddress: ['', [Validators.required]],
        CompanyWebsiteLink: ['', [Validators.required]],
        CorporateIdentificationNo: ['', [Validators.required]],
        CompanyLogo: [''],
        CompanyStamp: [''],
      },
      {
        validators: passwordMatchValidator,
      },
    );
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.authService.onRegister(this.registerForm.value).subscribe({
      next: (res: IUserRegisterResponse) => {
        this.snackbarService.showSnackBar(res.message, 'success');
      },
      error: (err) => {
        this.snackbarService.showSnackBar(err, 'danger');
      },
    });
  }

  showError(property: string): string | null {
    const control = this.registerForm.get(property);
    // FormGroup-level error
    if (
      property === 'ConfirmPassword' &&
      this.registerForm.hasError('passwordMismatch') &&
      (control?.touched || control?.dirty)
    ) {
      return 'Passwords do not match';
    }

    // if (property === 'ConfirmPassword' && this.registerForm.hasError('passwordMismatch')) {
    //   return 'Passwords do not match';
    // }

    if (control && control.invalid && (control.touched || control.dirty)) {
      const erros = control.errors || {};
      const error = Object.keys(erros)[0];

      switch (error) {
        case 'required':
          return 'Required';
        case 'email':
          return 'Enter valid email id';
        case 'pattern':
          switch (property) {
            case 'CompanyContactNo':
              return 'Enter valid numbers only';
            case 'UserName':
            case 'Role':
              return 'Enter valid alphabets only';
          }
          break;
        case 'maxlength':
          switch (property) {
            case 'CompanyContactNo':
              return 'Mobile number should not exceed 10 digits';
          }
          break;
        case 'minlength':
          switch (property) {
            case 'Password':
              return 'Password should be atleast 6 characters';
          }
      }
    }

    return null;
  }
}
