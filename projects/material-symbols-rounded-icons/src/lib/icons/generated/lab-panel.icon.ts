import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-lab-panel-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .msr-icon-svg {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }
  `],
  template: `<svg
  msrIconSvg
  focusable="false"
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M120-120q-33 0-56.5-23.5T40-200v-200q0-33 23.5-56.5T120-480v-171q-18-11-29-28.5T80-720v-40q0-33 23.5-56.5T160-840h200q33 0 56.5 23.5T440-760v40q0 23-11 40.5T400-651v171h160v-171q-18-11-29-28.5T520-720v-40q0-33 23.5-56.5T600-840h200q33 0 56.5 23.5T880-760v40q0 23-11 40.5T840-651v171q33 0 56.5 23.5T920-400v200q0 33-23.5 56.5T840-120H120Zm480-600h200v-40H600v40Zm-440 0h200v-40H160v40Zm480 240h120v-160H640v160Zm-440 0h120v-160H200v160Zm-80 280h720v-200H120v200Zm40-520v-40 40Zm440 0v-40 40ZM120-200v-200 200Z"/>
</svg>`,
})
export class MsrLabPanelIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
