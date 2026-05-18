import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-connected-tv-icon',
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
  <path d="M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm80-40q17 0 28.5-11.5T280-360q0-17-11.5-28.5T240-400q-17 0-28.5 11.5T200-360q0 17 11.5 28.5T240-320Zm251 0q12 0 20.5-8.5T520-349q0-121-85-206t-206-85q-12 0-20.5 8.5T200-611q0 12 8.5 20.5T229-582q97 0 165 68t68 165q0 12 8.5 20.5T491-320Zm-120 0q12 0 20.5-8.5T400-349q0-71-50-121t-121-50q-12 0-20.5 8.5T200-491q0 12 8.5 20.5T229-462q47 0 80 33t33 80q0 12 8.5 20.5T371-320Z"/>
</svg>`,
})
export class MsrConnectedTvIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
