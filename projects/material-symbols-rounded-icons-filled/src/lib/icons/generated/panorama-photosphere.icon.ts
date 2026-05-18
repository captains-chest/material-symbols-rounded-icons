import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-panorama-photosphere-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  <path d="M480-80q-121 0-216.5-63.5T120-308q-11-5-20-9t-18-9q-20-11-31-29t-11-41v-168q0-23 11-41t31-29q9-5 18-9t20-9q48-101 143.5-164.5T480-880q121 0 216.5 63.5T840-652q11 5 20 9t18 9q20 11 31 29.5t11 40.5v168q0 22-11 40.5T878-326q-9 5-18 9t-20 9q-48 101-143.5 164.5T480-80Zm0-80q69 0 131-28.5T718-268q-59 14-118.5 21T480-240q-60 0-119.5-7T242-268q45 51 107 79.5T480-160Zm0-640q-69 0-131 28.5T242-692q59-14 118.5-21t119.5-7q60 0 119.5 7T718-692q-45-51-107-79.5T480-800Z"/>
</svg>`,
})
export class MsrfPanoramaPhotosphereIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
