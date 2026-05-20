import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-edit-attributes-icon',
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
  <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h400q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H280Zm0-80h400q50 0 85-35t35-85q0-50-35-85t-85-35H280q-50 0-85 35t-35 85q0 50 35 85t85 35Zm70-56 93-93q9-9 9-21t-9-21q-9-9-21-9t-21 9l-79 79-19-19q-9-9-21-9t-21 9q-9 9-9 21t9 21l33 33q12 12 28 12t28-12Zm130-64Z"/>
</svg>`,
})
export class MsrEditAttributesIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
