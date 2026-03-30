import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-title-bar">LOGIN</div>
    <div class="login-wrapper">
      <div class="card">
        <p>Please enter the case sensitive password from your official invitation.</p>
        <form (ngSubmit)="onSubmit()">
          <div class="form-group" style="margin-bottom: 5px;">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" [(ngModel)]="password" required>
          </div>
          <div style="text-align: right; margin-top: 15px;">
            <button type="submit" class="btn-primary" [disabled]="!password">Login</button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      © Copyright 2015
    </div>
  `,
  styles: [`
    .login-wrapper {
      padding: 40px 20px;
    }
    p {
      color: var(--text-color);
      font-size: 0.95rem;
      margin-bottom: 20px;
      margin-top: 0;
    }
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      padding: 20px 0;
      background-color: #aaaaaa;
      color: #555555;
    }
  `]
})
export class LoginComponent {
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // In a real app we'd validate the password
    if (this.password) {
      this.router.navigate(['/register']);
    }
  }
}
