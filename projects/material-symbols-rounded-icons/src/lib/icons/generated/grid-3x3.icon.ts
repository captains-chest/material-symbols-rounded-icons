import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-grid-3x3-icon',
  imports: [MsrIconSvgDirective],
  hostDirectives: [MsrIconHostDirective],
  styles: [`
    :host.msr-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M320-320H200q-17 0-28.5-11.5T160-360q0-17 11.5-28.5T200-400h120v-160H200q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h120v-120q0-17 11.5-28.5T360-800q17 0 28.5 11.5T400-760v120h160v-120q0-17 11.5-28.5T600-800q17 0 28.5 11.5T640-760v120h120q17 0 28.5 11.5T800-600q0 17-11.5 28.5T760-560H640v160h120q17 0 28.5 11.5T800-360q0 17-11.5 28.5T760-320H640v120q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-120H400v120q0 17-11.5 28.5T360-160q-17 0-28.5-11.5T320-200v-120Zm80-80h160v-160H400v160Z"/>
</svg>`,
})
export class MsrGrid3x3IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
