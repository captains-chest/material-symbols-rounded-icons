import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-smart-screen-icon',
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
  <path d="M530-450q-13 0-21.5-8.5T500-480q0-13 8.5-21.5T530-510q13 0 21.5 8.5T560-480q0 13-8.5 21.5T530-450Zm-200 0q-13 0-21.5-8.5T300-480q0-13 8.5-21.5T330-510q13 0 21.5 8.5T360-480q0 13-8.5 21.5T330-450Zm300 0q-13 0-21.5-8.5T600-480q0-13 8.5-21.5T630-510q13 0 21.5 8.5T660-480q0 13-8.5 21.5T630-450Zm-200 0q-13 0-21.5-8.5T400-480q0-13 8.5-21.5T430-510q13 0 21.5 8.5T460-480q0 13-8.5 21.5T430-450ZM120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h720q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H120Zm40-80v-400h-40v400h40Zm80 0h480v-400H240v400Zm560 0h40v-400h-40v400ZM160-680h-40 40Zm640 0h40-40Z"/>
</svg>`,
})
export class MsrSmartScreenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
