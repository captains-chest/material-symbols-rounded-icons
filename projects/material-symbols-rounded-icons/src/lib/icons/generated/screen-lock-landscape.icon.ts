import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-screen-lock-landscape-icon',
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
  <path d="M394-320q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H394Zm46-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40ZM120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h720q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H120Zm40-80v-400h-40v400h40Zm80 0h480v-400H240v400Zm560 0h40v-400h-40v400ZM160-680h-40 40Zm640 0h40-40Z"/>
</svg>`,
})
export class MsrScreenLockLandscapeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
