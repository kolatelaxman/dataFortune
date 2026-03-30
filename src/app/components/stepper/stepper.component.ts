import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stepper-container">
      <div class="step" [class.active]="currentStep >= 1">
        <div class="circle" [class.filled]="currentStep >= 1">1</div>
        <div class="label">REGISTER</div>
      </div>
      <div class="line" [class.filled]="currentStep >= 2"></div>
      <div class="step" [class.active]="currentStep >= 2">
        <div class="circle" [class.filled]="currentStep >= 2">2</div>
        <div class="label">SUBMIT INFO</div>
      </div>
      <div class="line" [class.filled]="currentStep >= 3"></div>
      <div class="step" [class.active]="currentStep >= 3">
        <div class="circle" [class.filled]="currentStep >= 3">3</div>
        <div class="label">COMPLETE</div>
      </div>
    </div>
  `,
  styles: [`
    .stepper-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px 0;
    }
    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    .circle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--light-grey);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      z-index: 2;
    }
    .circle.filled {
      background-color: var(--dark-blue);
    }
    .label {
      margin-top: 10px;
      font-size: 0.8rem;
      color: var(--light-blue);
      text-transform: uppercase;
      font-weight: bold;
      position: absolute;
      top: 30px;
      width: 100px;
      text-align: center;
    }
    .line {
      flex: 0 1 150px;
      height: 2px;
      background-color: #ffffff;
      margin: 0 -10px;
      z-index: 1;
      border-top: 2px solid white;
    }
    .line.filled {
      background-color: var(--dark-blue);
      border-top-color: var(--dark-blue);
    }
  `]
})
export class StepperComponent {
  @Input() currentStep: number = 1;
}
