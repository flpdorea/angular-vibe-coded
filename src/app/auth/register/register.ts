import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value.email!, this.registerForm.value.password!);
    }
  }
}