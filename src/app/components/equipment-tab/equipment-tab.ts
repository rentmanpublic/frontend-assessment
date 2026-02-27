import { Component, inject, viewChild, TemplateRef } from '@angular/core';
import { ProjectDataService } from '../../services/project-data.service';
import {
  ButtonComponent,
  CardComponent,
  DataTableComponent,
  ModalService,
} from '../../shared';

@Component({
  selector: 'app-equipment-tab',
  imports: [
    ButtonComponent,
    CardComponent,
    DataTableComponent,
  ],
  templateUrl: './equipment-tab.html',
  styleUrl: './equipment-tab.css',
})
export class EquipmentTabComponent {
  private data = inject(ProjectDataService);
  private modals = inject(ModalService);

  readonly addEquipmentTemplate = viewChild.required<TemplateRef<unknown>>('addEquipmentTemplate');

  readonly equipment = this.data.equipment;
  readonly totalQuantity = this.data.totalQuantity;

  openAddEquipment(): void {
    this.modals.open({
      id: 'add-equipment',
      title: 'Add Equipment',
      template: this.addEquipmentTemplate(),
    });
  }

  closeAddEquipment(): void {
    this.modals.close('add-equipment');
  }
}
