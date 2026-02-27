import { Injectable, signal, computed } from '@angular/core';
import { Vehicle, Driver, EquipmentItem } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ProjectDataService {
  readonly vehicles = signal<Vehicle[]>([]);
  readonly allVehicles = signal<Vehicle[]>([]);
  readonly drivers = signal<Driver[]>([]);
  readonly equipment = signal<EquipmentItem[]>([]);
  readonly loaded = signal(false);

  readonly totalQuantity = computed(() => this.equipment().reduce((sum, e) => sum + e.quantity, 0));

  readonly totalWeight = computed(() => this.equipment().reduce((sum, e) => sum + e.weight, 0));

  async loadData(): Promise<void> {
    const [vehiclesData, driversData, equipmentData] = await Promise.all([
      fetch('data/vehicles.json').then((r) => r.json()),
      fetch('data/drivers.json').then((r) => r.json()),
      fetch('data/equipment.json').then((r) => r.json()),
    ]);
    this.allVehicles.set(vehiclesData);
    this.vehicles.set(vehiclesData.slice(0, 6));
    this.drivers.set(driversData);
    this.equipment.set(equipmentData);

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
}
