import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-pip-exit-icon',
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
  <path d="M160-160q-33 0-56.5-23.5T80-240v-240q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480v240h640v-480H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm400-263 95 95q12 12 28 12t28-12q12-12 12-28.5T711-385l-95-95h64q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560H520q-17 0-28.5 11.5T480-520v160q0 17 11.5 28.5T520-320q17 0 28.5-11.5T560-360v-63ZM120-600q-17 0-28.5-11.5T80-640v-120q0-17 11.5-28.5T120-800h200q17 0 28.5 11.5T360-760v120q0 17-11.5 28.5T320-600H120Zm360 120Z"/>
</svg>`,
})
export class MsrPipExitIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
