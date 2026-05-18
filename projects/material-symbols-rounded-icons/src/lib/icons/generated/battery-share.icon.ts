import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-battery-share-icon',
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
  <path d="M440-280q-17 0-28.5-11.5T400-320v-80q0-33 23-56.5t57-23.5h166l-35-35q-11-12-11-28.5t11-27.5q12-12 28.5-12t28.5 12l103 103q12 12 12 28.5T771-411L668-308q-12 12-28.5 12T611-308q-12-12-11.5-28.5T611-365l35-35H480v81q0 17-11.5 28T440-280ZM320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v80q0 17-11.5 28.5T640-640q-17 0-28.5-11.5T600-680v-40H360v560h240v-40q0-17 11.5-28.5T640-240q17 0 28.5 11.5T680-200v80q0 17-11.5 28.5T640-80H320Z"/>
</svg>`,
})
export class MsrBatteryShareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
