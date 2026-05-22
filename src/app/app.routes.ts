import { Routes } from '@angular/router';
import { EquipmentTabComponent } from './components/equipment-tab/equipment-tab';
import { TransportTabComponent } from './components/transport-tab/transport-tab';
import { CrewTabComponent } from './components/crew-tab/crew-tab';
import { FinancialTabComponent } from './components/financial-tab/financial-tab';

export const routes: Routes = [
  { path: 'equipment', component: EquipmentTabComponent },
  { path: 'crew', component: CrewTabComponent },
  { path: 'transport', component: TransportTabComponent },
  { path: 'financial', component: FinancialTabComponent },
  { path: '', redirectTo: 'equipment', pathMatch: 'full' },
];
