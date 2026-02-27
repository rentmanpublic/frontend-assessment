import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from './modal';

@Component({
  selector: 'app-modal-outlet',
  imports: [NgTemplateOutlet, ModalComponent],
  template: `
    @for (modal of modals(); track modal.id) {
      <app-modal (close)="modalService.close(modal.id)">
        <h2 modal-header class="modal-title">{{ modal.title }}</h2>
        <ng-container *ngTemplateOutlet="modal.template" />
      </app-modal>
    }
  `,
  styles: `
    .modal-title {
      font-size: var(--font-size-md);
      font-weight: 600;
      margin: 0;
    }
  `,
})
export class ModalOutletComponent {
  readonly modalService = inject(ModalService);
  readonly modals = this.modalService.modals;
}
