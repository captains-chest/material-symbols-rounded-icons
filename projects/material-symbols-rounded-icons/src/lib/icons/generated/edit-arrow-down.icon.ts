import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-edit-arrow-down-icon',
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
  <path d="M160-240q-17 0-28.5-11.5T120-280v-90q0-16 6.5-30.5T144-426l271-271q24-24 57.5-23t56.5 25l48 50q23 23 22.5 56T576-533L306-263q-11 11-25.5 17t-30.5 6h-90Zm40-80h50l162-162-25-25-25-25-162 162v50Zm269-219-50-50 50 50Zm283 351-92-92q-11-12-11-28.5t12-27.5q12-11 28.5-11.5T717-336l23 23v-447q0-17 11.5-28.5T780-800q17 0 28.5 11.5T820-760v448l24-24q11-11 28-11t28 11q11 11 11 28t-11 28l-92 92q-12 12-28 12t-28-12Z"/>
</svg>`,
})
export class MsrEditArrowDownIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
