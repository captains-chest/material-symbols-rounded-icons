import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-signal-cellular-off-icon',
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
  <path d="M273-160h414L480-367 273-160Zm-96 80q-27 0-37.5-24.5T148-148l276-276-300-299q-12-11-11.5-27.5T124-779q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T859-44q-12 11-28 11.5T803-44l-36-36H177Zm703-703v494q0 20-12.5 30T840-249q-15 0-27.5-10.5T800-290v-397L621-508q-11 11-27.5 11T565-508q-12-12-12-28.5t12-28.5l247-247q19-19 43.5-8.5T880-783ZM697-377ZM584-264Z"/>
</svg>`,
})
export class MsrSignalCellularOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
