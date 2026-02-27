import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  host: {
    '[class.card-host--fill]': 'fill()',
  },
  template: `
    <div class="card" [class.card--padded]="padded()" [class.card--fill]="fill()">
      <ng-content />
    </div>
  `,
  styles: `
    :host.card-host--fill {
      display: flex;
      flex: 1;
    }

    .card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-base);
    }

    .card--padded {
      padding: var(--space-6);
    }

    .card--fill {
      flex: 1;
    }
  `,
})
export class CardComponent {
  readonly padded = input(false);
  readonly fill = input(false);
}
