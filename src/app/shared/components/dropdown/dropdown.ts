import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    @if (open()) {
      <div class="dropdown-backdrop" (click)="close.emit()"></div>
      <div class="dropdown-panel">
        @if (label()) {
          <div class="dropdown-label">{{ label() }}</div>
        }
        <div class="dropdown-options">
          <ng-content />
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      position: relative;
      display: block;
    }

    .dropdown-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: var(--z-backdrop);
    }

    .dropdown-panel {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-base);
      box-shadow: var(--shadow-lg);
      z-index: var(--z-dropdown);
      max-height: 320px;
      overflow-y: auto;
    }

    .dropdown-label {
      padding: var(--space-3) var(--space-4) var(--space-2);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      color: var(--color-on-surface);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `,
})
export class DropdownComponent {
  readonly open = input(false);
  readonly label = input('');
  readonly close = output<void>();
}
