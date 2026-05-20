import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-view-kanban-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msrf-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrfIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-560q-17 0-28.5 11.5T280-640v320q0 17 11.5 28.5T320-280q17 0 28.5-11.5T360-320v-320q0-17-11.5-28.5T320-680Zm320 0q-17 0-28.5 11.5T600-640v240q0 17 11.5 28.5T640-360q17 0 28.5-11.5T680-400v-240q0-17-11.5-28.5T640-680Zm-160 0q-17 0-28.5 11.5T440-640v120q0 17 11.5 28.5T480-480q17 0 28.5-11.5T520-520v-120q0-17-11.5-28.5T480-680Z"/>
</svg>`,
})
export class MsrfViewKanbanIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
