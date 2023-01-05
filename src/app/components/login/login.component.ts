import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ValidationService } from "../../services/validation.service";
import { AuthService } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form = this.fb.group({
    email: new FormControl<string>(
      null, [
        Validators.required,
        ValidationService.emailValidator()
      ]),
    password: new FormControl<string>(
      null, [
        Validators.required,
        Validators.minLength(8),
        ValidationService.passwordValidator()
      ])
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  async login(): Promise<void> {
    if (this.form.valid) {
      await this.authService.login(this.form.value.email, this.form.value.password)
        .then(() => {
          this.router.navigate(['todo']);
        })
        .catch(() => {
          this.openSnackBar();
        });
    }
  }

  private openSnackBar() {
    this._snackBar.open('Invalid email or password', null, {
      verticalPosition: 'top',
      duration: 3 * 1000,
    });
  }
}
