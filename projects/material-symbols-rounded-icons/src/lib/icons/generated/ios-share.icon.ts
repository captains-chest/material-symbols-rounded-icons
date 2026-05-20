import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-ios-share-icon',
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
  <path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h80q17 0 28.5 11.5T360-600q0 17-11.5 28.5T320-560h-80v440h480v-440h-80q-17 0-28.5-11.5T600-600q0-17 11.5-28.5T640-640h80q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-727-36 36q-12 12-28 11.5T348-732q-11-12-11.5-28t11.5-28l104-104q12-12 28-12t28 12l104 104q11 11 11 27.5T612-732q-12 12-28.5 12T555-732l-35-35v407q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-407Z"/>
</svg>`,
})
export class MsrIosShareIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
