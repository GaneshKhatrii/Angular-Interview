import { Component, signal } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: "app-login",
  imports: [MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule],
  templateUrl: "./login.html",
  styleUrl: "./login.scss",
})
export class Login {
  hidePassword = signal<boolean>(true);

  togglePasswordVisibility(): void {
    this.hidePassword.update((value) => !value);
  }
}
