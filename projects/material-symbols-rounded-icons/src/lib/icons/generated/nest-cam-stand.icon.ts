import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-nest-cam-stand-icon',
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
  <path d="M360-643q-40 27-65.5 69.5T264-480l-24 280h480l-24-280q-4-52-29.5-94.5T600-644v84q0 50-35 85t-85 35q-50 0-85-35t-35-85v-83Zm120 123q17 0 28.5-11.5T520-560v-160q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160q0 17 11.5 28.5T480-520ZM240-120q-35 0-59-26t-21-61l24-281q7-85 55-150t122-97q6-45 39.5-75t79.5-30q46 0 79.5 29.5T599-736q74 32 122.5 97.5T776-488l24 281q3 35-21 61t-59 26H240Z"/>
</svg>`,
})
export class MsrNestCamStandIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
