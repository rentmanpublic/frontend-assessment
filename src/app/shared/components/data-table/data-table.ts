import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  host: {
    class: 'app-data-table',
  },
  template: `
    <div class="data-table-wrapper">
      <table class="data-table">
        <ng-content />
      </table>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    .data-table-wrapper {
      width: 100%;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-base);
      overflow: visible;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--font-size-sm);
    }

    /* ── Header ── */
    .data-table :host ::ng-deep thead th,
    :host ::ng-deep thead th {
      background: var(--color-surface-muted);
      border-bottom: 1px solid var(--color-border);
      border-right: 1px solid var(--color-border);
      padding: var(--space-2) var(--space-4);
      text-align: left;
      font-weight: var(--font-weight-normal);
      color: var(--color-on-surface);
    }

    :host ::ng-deep thead th:last-child {
      border-right: none;
    }

    /* ── Body cells ── */
    :host ::ng-deep tbody td {
      border-bottom: 1px solid var(--color-border);
      border-right: 1px solid var(--color-border);
      padding: var(--space-2) var(--space-4);
      color: var(--color-on-surface);
    }

    :host ::ng-deep tbody td:last-child {
      border-right: none;
    }

    /* ── Footer ── */
    :host ::ng-deep tfoot td {
      background: var(--color-surface-muted);
      border-bottom: none;
      border-right: 1px solid var(--color-border);
      padding: var(--space-2) var(--space-4);
      color: var(--color-on-surface);
    }

    :host ::ng-deep tfoot td:last-child {
      border-right: none;
    }
  `,
})
export class DataTableComponent {}
