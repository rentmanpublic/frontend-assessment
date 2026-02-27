import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div
      class="avatar"
      [style.background]="background()"
      [style.color]="color()"
      [style.width.px]="size()"
      [style.height.px]="size()"
      [style.font-size.px]="fontSize()"
    >
      {{ initials() }}
    </div>
  `,
  styles: `
    .avatar {
      border-radius: var(--radius-base);
      font-weight: var(--font-weight-semibold);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
  `,
})
export class AvatarComponent {
  readonly initials = input.required<string>();
  readonly background = input('linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
  readonly color = input('white');
  readonly size = input(32);

  protected readonly fontSize = computed(() => Math.round(this.size() * 0.34));
}
