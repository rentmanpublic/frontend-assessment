import { Routes } from '@angular/router';
import { EquipmentTabComponent } from './components/equipment-tab/equipment-tab';
import { CrewTabComponent } from './components/crew-tab/crew-tab';
import { FinancialTabComponent } from './components/financial-tab/financial-tab';

export const routes: Routes = [
  { path: 'equipment', component: EquipmentTabComponent },
  { path: 'crew', component: CrewTabComponent },
  { path: 'financial', component: FinancialTabComponent },
  { path: '', redirectTo: 'equipment', pathMatch: 'full' },
];
