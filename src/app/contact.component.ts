import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="contact">
    <h2>Contact Us</h2>
    <p>This is a demo contact page.</p>
  </div>`,
  styles: [
    `
      .contact {
        max-width: 400px;
        margin: 2rem auto;
        background: #fff;
        padding: 1rem;
        border-radius: 4px;
        box-shadow: 0 2px 8px #eee;
      }
    `,
  ],
})
export class ContactComponent {}
