import { Component, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-backdrop" (click)="onBackdropClick($event)">
      <div class="modal-card">
        <div class="modal-header">
          <ng-content select="[modal-header]" />
        </div>
        <div class="modal-body">
          <ng-content />
        </div>
        <div class="modal-footer">
          <ng-content select="[modal-footer]" />
        </div>
      </div>
    </div>
  `,
  styles: `
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--z-modal);
    }

    .modal-card {
      background: var(--color-surface);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-xl);
      width: 480px;
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      padding: var(--space-6);
      padding-bottom: var(--space-4);
    }

    .modal-body {
      padding: 0 var(--space-6);
      flex: 1;
      overflow-y: auto;
    }

    .modal-footer {
      padding: var(--space-4) var(--space-6) var(--space-6);
      display: flex;
      justify-content: flex-end;
      gap: var(--space-4);
    }
  `,
})
export class ModalComponent {
  readonly close = output<void>();

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }
}
