import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../../components/stepper/stepper.component';

@Component({
  selector: 'app-complete',
  standalone: true,
  imports: [CommonModule, StepperComponent],
  template: `
    <div class="page-title-bar">COMPLETE</div>
    <div class="complete-wrapper">
      <app-stepper [currentStep]="3"></app-stepper>
      
      <div class="card">
        <h3>Thank you for registering!</h3>
        <p>You should recieve a confirmation email momentarily containing additional details.</p>
      </div>
    </div>
    <div class="footer">
      © Copyright 2015
    </div>
  `,
  styles: [`
    .complete-wrapper {
      padding: 0 20px 40px;
    }
    h3 {
      margin-top: 0;
      color: var(--text-color);
      font-size: 1.1rem;
    }
        p {
          color: var(--text-color);
          font-size: 0.95rem;
          margin-bottom: 20px;
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
    export class CompleteComponent {}
