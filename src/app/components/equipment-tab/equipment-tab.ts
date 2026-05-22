import { Component, inject, signal, viewChild, TemplateRef } from '@angular/core';
import { ProjectDataService } from '../../services/project-data.service';
import {
  ButtonComponent,
  CardComponent,
  DataTableComponent,
  DropdownComponent,
  DropdownOptionComponent,
  ModalService,
  WeightPipe,
} from '../../shared';

@Component({
  selector: 'app-equipment-tab',
  imports: [
    ButtonComponent,
    CardComponent,
    DataTableComponent,
    DropdownComponent,
    DropdownOptionComponent,
    WeightPipe,
  ],
  templateUrl: './equipment-tab.html',
  styleUrl: './equipment-tab.css',
})
export class EquipmentTabComponent {
  private data = inject(ProjectDataService);
  private modals = inject(ModalService);

  readonly addEquipmentTemplate = viewChild.required<TemplateRef<unknown>>('addEquipmentTemplate');

  readonly equipment = this.data.equipment;
  readonly allVehicles = this.data.allVehicles;
  readonly totalQuantity = this.data.totalQuantity;
  readonly totalWeight = this.data.totalWeight;

  readonly editingEquipmentId = signal<string | null>(null);

  getVehicleName(vehicleId: string | null): string {
    if (!vehicleId) return '-';
    const v = this.data.getVehicle(vehicleId);
    return v?.name ?? '-';
  }

  getVehicleImage(vehicleId: string | null): string {
    if (!vehicleId) return '';
    const v = this.data.getVehicle(vehicleId);
    return v?.image ?? '';
  }

  toggleDropdown(equipmentId: string): void {
    if (this.editingEquipmentId() === equipmentId) {
      this.editingEquipmentId.set(null);
    } else {
      this.editingEquipmentId.set(equipmentId);
    }
  }

  assignVehicle(equipmentId: string, vehicleId: string | null): void {
    this.data.assignVehicleToEquipment(equipmentId, vehicleId);
    this.editingEquipmentId.set(null);
  }

  closeDropdown(): void {
    this.editingEquipmentId.set(null);
  }

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
