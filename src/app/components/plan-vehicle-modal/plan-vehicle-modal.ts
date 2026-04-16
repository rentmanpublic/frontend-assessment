import { Component, computed, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectDataService } from '../../services/project-data.service';
import { Vehicle } from '../../models/models';

@Component({
  selector: 'app-plan-vehicle-modal',
  imports: [FormsModule],
  templateUrl: './plan-vehicle-modal.html',
  styleUrl: './plan-vehicle-modal.css',
})
export class PlanVehicleModalComponent {
  private data = inject(ProjectDataService);

  vehicle = input.required<Vehicle>();
  close = output<void>();
  save = output<{ vehicleId: string; driverId: string | null; destination: string }>();

  readonly drivers = this.data.drivers;
  readonly selectedDriverId = signal<string | null>(null);
  readonly destination = signal('');
  readonly showDriverDropdown = signal(false);

  readonly selectedDriverName = computed(() => {
    const driver = this.data.getDriver(this.selectedDriverId());
    return driver?.name ?? 'Select a driver';
  });

  toggleDriverDropdown(): void {
    this.showDriverDropdown.update((v) => !v);
  }

  selectDriver(driverId: string): void {
    this.selectedDriverId.set(driverId);
    this.showDriverDropdown.set(false);
  }

  onSave(): void {
    this.save.emit({
      vehicleId: this.vehicle().id,
      driverId: this.selectedDriverId(),
      destination: this.destination(),
    });
  }

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: Event): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.onClose();
    }
  }
}
