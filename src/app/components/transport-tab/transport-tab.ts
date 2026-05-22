import { Component, inject, signal } from '@angular/core';
import { ProjectDataService } from '../../services/project-data.service';
import { PlanVehicleModalComponent } from '../plan-vehicle-modal/plan-vehicle-modal';
import { Vehicle, TransportPlan } from '../../models/models';

@Component({
  selector: 'app-transport-tab',
  imports: [PlanVehicleModalComponent],
  templateUrl: './transport-tab.html',
  styleUrl: './transport-tab.css',
  host: { style: 'display: block; height: 100%' },
})
export class TransportTabComponent {
  private data = inject(ProjectDataService);

  readonly vehicles = this.data.vehicles;
  readonly transportPlans = this.data.transportPlans;
  readonly selectedVehicleId = signal<string | null>(null);
  readonly showPlanModal = signal(false);
  readonly planningVehicle = signal<Vehicle | null>(null);

  getDriver(driverId: string | null) {
    return this.data.getDriver(driverId);
  }

  getVehicle(vehicleId: string) {
    return this.data.getVehicle(vehicleId);
  }

  getGoogleMapsUrl(destination: string): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
  }

  selectVehicle(vehicleId: string): void {
    this.selectedVehicleId.set(vehicleId);
  }

  openPlanModal(vehicle: Vehicle, event: Event): void {
    event.stopPropagation();
    this.planningVehicle.set(vehicle);
    this.showPlanModal.set(true);
  }

  closePlanModal(): void {
    this.showPlanModal.set(false);
    this.planningVehicle.set(null);
  }

  onSavePlanning(result: {
    vehicleId: string;
    driverId: string | null;
    destination: string;
  }): void {
    this.data.updateVehiclePlanning(result.vehicleId, result.driverId, result.destination);
    this.closePlanModal();
  }
}
