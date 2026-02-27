import { Injectable, signal, TemplateRef } from '@angular/core';

export interface ModalConfig {
  id: string;
  title: string;
  template: TemplateRef<unknown>;
}

/**
 * Central modal service for managing modal dialogs.
 *
 * Usage:
 *   private modals = inject(ModalService);
 *
 *   // Open a modal with a template ref
 *   this.modals.open({ id: 'edit-item', title: 'Edit Item', template: this.editTemplate });
 *
 *   // Close a modal
 *   this.modals.close('edit-item');
 */
@Injectable({ providedIn: 'root' })
export class ModalService {
  private readonly _modals = signal<ModalConfig[]>([]);
  readonly modals = this._modals.asReadonly();

  open(config: ModalConfig): void {
    this._modals.update((modals) => [...modals.filter((m) => m.id !== config.id), config]);
  }

  close(id: string): void {
    this._modals.update((modals) => modals.filter((m) => m.id !== id));
  }

  closeAll(): void {
    this._modals.set([]);
  }
}
