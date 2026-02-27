import { Component } from '@angular/core';
import { CardComponent } from '../../shared';

@Component({
  selector: 'app-financial-tab',
  imports: [CardComponent],
  template: `
    <div class="stub-tab">
      <app-card [padded]="true">
        <p class="stub-text">Financial content</p>
      </app-card>
    </div>
  `,
  styles: `
    .stub-tab {
      padding: var(--space-6);
    }

    .stub-text {
      color: var(--color-denim-400);
      font-size: var(--font-size-md);
      text-align: center;
      padding: var(--space-6);
    }
  `,
})
export class FinancialTabComponent {}
