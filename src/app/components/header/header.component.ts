import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="logo">
        <span class="logo-intra">Intra</span><span class="logo-med">M<span class="logo-e">e</span>d</span>
        <div class="logo-sub">MEETINGS</div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: var(--header-bg);
      padding: 15px;
      text-align: center;
      border-bottom: 5px solid var(--light-grey);
    }
    .logo {
      display: inline-block;
      text-align: center;
    }
    .logo-intra {
      color: var(--light-blue);
      font-size: 32px;
      font-family: Georgia, serif;
    }
    .logo-med {
      color: var(--dark-grey);
      font-size: 32px;
      font-family: Georgia, serif;
    }
    .logo-e {
      vertical-align: super;
      font-size: 0.9em;
    }
    .logo-sub {
      color: var(--dark-grey);
      font-size: 14px;
      letter-spacing: 4px;
      margin-top: -5px;
      text-transform: uppercase;
    }
  `]
})
export class HeaderComponent {
}
