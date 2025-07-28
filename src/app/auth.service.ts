import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(email: string, password: string) {
    console.log('Login attempt:', email, password);
    // Implement actual login logic here
  }

  register(email: string, password: string) {
    console.log('Register attempt:', email, password);
    // Implement actual registration logic here
  }
}