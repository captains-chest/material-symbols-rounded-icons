import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-ungroup-icon',
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
  <path d="M520-464 376-320q-11 11-28 11t-28-11q-11-11-11-28t11-28l144-144H360q-17 0-28.5-11.5T320-560q0-17 11.5-28.5T360-600h200q17 0 28.5 11.5T600-560v200q0 17-11.5 28.5T560-320q-17 0-28.5-11.5T520-360v-104Zm0-296q-17 0-28.5-11.5T480-800q0-17 11.5-28.5T520-840h240q33 0 56.5 23.5T840-760v240q0 17-11.5 28.5T800-480q-17 0-28.5-11.5T760-520v-240H520ZM200-120q-33 0-56.5-23.5T120-200v-600q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v600h600q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H200Z"/>
</svg>`,
})
export class MsrUngroupIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
