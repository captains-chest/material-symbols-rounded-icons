import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-south-west-icon',
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
  <path d="M240-200q-17 0-28.5-11.5T200-240v-320q0-17 11.5-28.5T240-600q17 0 28.5 11.5T280-560v224l436-436q11-11 28-11t28 11q11 11 11 28t-11 28L336-280h224q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H240Z"/>
</svg>`,
})
export class MsrSouthWestIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
