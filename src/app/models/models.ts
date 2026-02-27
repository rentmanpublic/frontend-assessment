export interface Vehicle {
  id: string;
  name: string;
  plate: string;
  maxWeight: number;
  maxVolume: number;
  image: string;
}

export interface TransportPlan {
  id: string;
  vehicleId: string;
  driverId: string | null;
  destination: string;
}

export interface Driver {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  initialsColor: string;
  license: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  vehicleId: string | null;
  quantity: number;
  weight: number;
}
