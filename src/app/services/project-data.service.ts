import { Injectable, signal, computed } from '@angular/core';
import { Vehicle, Driver, EquipmentItem, TransportPlan } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ProjectDataService {
  readonly vehicles = signal<Vehicle[]>([]);
  readonly allVehicles = signal<Vehicle[]>([]);
  readonly drivers = signal<Driver[]>([]);
  readonly equipment = signal<EquipmentItem[]>([]);
  readonly loaded = signal(false);

  readonly totalQuantity = computed(() => this.equipment().reduce((sum, e) => sum + e.quantity, 0));

  readonly totalWeight = computed(() => this.equipment().reduce((sum, e) => sum + e.weight, 0));

  private readonly _transportPlans = signal<TransportPlan[]>([]);
  readonly transportPlans = this._transportPlans.asReadonly();

  async loadData(): Promise<void> {
    const [vehiclesData, driversData, equipmentData, transportPlansData] = await Promise.all([
      fetch('data/vehicles.json').then((r) => r.json()),
      fetch('data/drivers.json').then((r) => r.json()),
      fetch('data/equipment.json').then((r) => r.json()),
      fetch('data/transport-plans.json').then((r) => r.json()),
    ]);
    this.allVehicles.set(vehiclesData);
    this.vehicles.set(vehiclesData.slice(0, 6));
    this.drivers.set(driversData);
    this.equipment.set(equipmentData);
    this._transportPlans.set(transportPlansData);

    this.loaded.set(true);
  }

  getDriver(id: string | null): Driver | undefined {
    if (!id) return undefined;
    return this.drivers().find((d) => d.id === id);
  }

  getVehicle(id: string | null): Vehicle | undefined {
    if (!id) return undefined;
    return this.allVehicles().find((v) => v.id === id);
  }

  assignVehicleToEquipment(equipmentId: string, vehicleId: string | null): void {
    this.equipment.update((items) =>
      items.map((item) => (item.id === equipmentId ? { ...item, vehicleId } : item)),
    );
  }

  updateVehiclePlanning(vehicleId: string, driverId: string | null, destination: string): void {
    const id = 'tp' + Date.now();
    this._transportPlans.update((plans) => [...plans, { id, vehicleId, driverId, destination }]);
  }
}
