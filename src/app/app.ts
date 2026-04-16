import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectDataService } from './services/project-data.service';
import { ButtonComponent, AvatarComponent, ModalOutletComponent } from './shared';

@Component({
  selector: 'app-root',
  imports: [RouterModule, ButtonComponent, AvatarComponent, ModalOutletComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private data = inject(ProjectDataService);

  readonly loaded = this.data.loaded;

  readonly tabs = [
    { id: 'equipment', label: 'Equipment' },
    { id: 'crew', label: 'Crew Scheduling' },
    { id: 'transport', label: 'Transport Planning' },
    { id: 'financial', label: 'Financial' },
  ];

  readonly sidebarIcons = [
    'dashboard',
    'calendar_today',
    'home',
    null,
    'view_list',
    'person',
    'sync',
    'attach_money',
    null,
    'people',
    'group',
    'chat',
    'forum',
    null,
    'assignment_turned_in',
    'phone',
    null,
    'bar_chart',
    null,
    'description',
    'settings',
  ];

  ngOnInit(): void {
    this.data.loadData();
  }
}
