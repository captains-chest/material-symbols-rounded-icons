import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-h-mobiledata-icon',
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
  <path d="M360-440v120q0 17-11.5 28.5T320-280q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680q17 0 28.5 11.5T360-640v120h240v-120q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280q-17 0-28.5-11.5T600-320v-120H360Z"/>
</svg>`,
})
export class MsrHMobiledataIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
