import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login(email: string, password: string): Promise<void> {
    const userToLogin = users.find(user => user.email === email && user.password === password);
    if (userToLogin) {
      this.isLoggedIn = true;
      localStorage.setItem('userEmail', userToLogin.email);
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }
}


const users = [
  {
    email: 'alex@gmail.com',
    password: '1234qwer!'
  },
  {
    email: 'bob@gmail.com',
    password: '1234qwer!'
  },
  {
    email: 'john@gmail.com',
    password: '1234qwer!'
  }
]
