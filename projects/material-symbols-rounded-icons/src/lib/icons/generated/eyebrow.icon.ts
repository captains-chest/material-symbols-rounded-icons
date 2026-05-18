import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-eyebrow-icon',
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
  <path d="M600-400q-25 0-69.5 9T432-367q-54 15-112.5 35T206-289q-11 5-22.5 7t-23.5 2q-50 0-85-35t-35-85v-103q0-43 27-76.5t69-41.5q72-14 139-25t126-18.5q59-7.5 109.5-11.5t89.5-4q124 0 212.5 99.5T921-320q2 11-5.5 20T896-286q-11 5-23 3t-23-10q-64-50-131-78.5T600-400Zm0-80q54 0 100 14.5T815-412q-33-91-88.5-139.5T600-600q-80 0-201.5 16T152-542q-14 3-23 14t-9 25v103q0 22 17.5 33.5T175-363q60-25 123-46.5t120-37Q475-462 522.5-471t77.5-9Zm-133-23Z"/>
</svg>`,
})
export class MsrEyebrowIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
