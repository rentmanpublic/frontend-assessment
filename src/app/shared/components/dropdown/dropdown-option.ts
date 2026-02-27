import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dropdown-option',
  template: `
    <div class="dropdown-option" [class.dropdown-option--selected]="selected()">
      <ng-content />
    </div>
  `,
  styles: `
    .dropdown-option {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-4);
      cursor: pointer;
      font-size: 13px;
    }

    .dropdown-option:hover {
      background: var(--color-surface-muted);
    }

    .dropdown-option--selected {
      background: var(--color-primary-light);
    }
  `,
})
export class DropdownOptionComponent {
  readonly selected = input(false);
}
