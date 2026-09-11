import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
  const password = form.get('Password')?.value;
  const confirmPassword = form.get('ConfirmPassword');

  if (password !== confirmPassword?.value) {
    confirmPassword?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }

  confirmPassword?.setErrors(null);
  return null;
}
