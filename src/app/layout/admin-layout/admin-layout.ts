import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {
  private router = inject(Router);
  onLogout() {
    localStorage.removeItem('loginData');
    this.router.navigate(['/login']);
  }
}
