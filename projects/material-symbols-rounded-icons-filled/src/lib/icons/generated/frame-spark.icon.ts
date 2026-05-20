import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-frame-spark-icon',
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
  <path d="M651.5-788.5Q663-800 680-800h120q33 0 56.5 23.5T880-720v120q0 17-11.5 28.5T840-560q-17 0-28.5-11.5T800-600v-120H680q-17 0-28.5-11.5T640-760q0-17 11.5-28.5ZM120-560q-17 0-28.5-11.5T80-600v-120q0-33 23.5-56.5T160-800h120q17 0 28.5 11.5T320-760q0 17-11.5 28.5T280-720H160v120q0 17-11.5 28.5T120-560Zm560 400q-17 0-28.5-11.5T640-200q0-17 11.5-28.5T680-240h120v-120q0-17 11.5-28.5T840-400q17 0 28.5 11.5T880-360v120q0 33-23.5 56.5T800-160H680Zm-520 0q-33 0-56.5-23.5T80-240v-120q0-17 11.5-28.5T120-400q17 0 28.5 11.5T160-360v120h120q17 0 28.5 11.5T320-200q0 17-11.5 28.5T280-160H160Zm320-140q7 0 8-6 16-61 60.5-105.5T654-472q6-2 6-8 0-7-6-8-61-16-105.5-60.5T488-654q-2-6-8-6t-8 6q-16 61-60.5 105.5T306-488q-6 1-6 8 0 6 6 8 61 16 105.5 60.5T472-306q2 6 8 6Z"/>
</svg>`,
})
export class MsrfFrameSparkIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
