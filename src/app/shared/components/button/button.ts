import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  host: {
    '[class.app-button]': 'true',
  },
  template: `
    <button
      [class]="'btn btn--' + variant()"
      [disabled]="disabled()"
      [type]="type()"
    >
      @if (icon()) {
        <span class="material-icon btn__icon">{{ icon() }}</span>
      }
      <ng-content />
    </button>
  `,
  styles: `
    :host {
      display: inline-block;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-base);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      font-family: inherit;
      border: none;
      cursor: pointer;
      white-space: nowrap;
      transition: background var(--transition-fast);
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn--primary {
      background: var(--color-primary);
      color: var(--color-white);
    }

    .btn--primary:hover:not(:disabled) {
      background: var(--color-primary-hover);
    }

    .btn--outlined {
      background: var(--color-white);
      border: 1px solid var(--color-border);
      color: var(--color-on-surface);
    }

    .btn--outlined:hover:not(:disabled) {
      background: var(--color-surface-muted);
    }

    .btn--flat {
      background: none;
      border: none;
      color: var(--color-primary);
      padding: var(--space-2) var(--space-4);
    }

    .btn--flat:hover:not(:disabled) {
      background: var(--color-primary-light);
    }

    .btn__icon {
      font-size: var(--font-size-md) !important;
    }
  `,
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'outlined' | 'flat'>('primary');
  readonly icon = input<string>('');
  readonly disabled = input(false);
  readonly type = input<'button' | 'submit'>('button');
}
