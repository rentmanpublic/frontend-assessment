import { Injectable, signal, computed } from '@angular/core';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timestamp: number;
}

/**
 * Central notification service for displaying toast messages.
 *
 * Usage:
 *   private notifications = inject(NotificationService);
 *   this.notifications.success('Equipment saved.');
 *   this.notifications.error('Failed to update vehicle.');
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly _notifications = signal<Notification[]>([]);

  readonly notifications = this._notifications.asReadonly();
  readonly hasUnread = computed(() => this._notifications().length > 0);

  success(message: string): void {
    this.add('success', message);
  }

  error(message: string): void {
    this.add('error', message);
  }

  warning(message: string): void {
    this.add('warning', message);
  }

  info(message: string): void {
    this.add('info', message);
  }

  dismiss(id: string): void {
    this._notifications.update((items) => items.filter((n) => n.id !== id));
  }

  private add(type: Notification['type'], message: string): void {
    const notification: Notification = {
      id: crypto.randomUUID(),
      type,
      message,
      timestamp: Date.now(),
    };

    this._notifications.update((items) => [...items, notification]);

    // Auto-dismiss after 5 seconds
    setTimeout(() => this.dismiss(notification.id), 5000);
  }
}
