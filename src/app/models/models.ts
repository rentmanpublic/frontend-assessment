export interface Vehicle {
  id: string;
  name: string;
  plate: string;
  maxWeight: number;
  maxVolume: number;
  image: string;
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
  quantity: number;
  weight: number;
}
