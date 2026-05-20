import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-nest-cam-outdoor-icon',
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
  <path d="M576-189q-22 26-54.5 29.5T463-178L294-319q-26-21-45-48t-31-58q-11 12-26 18.5t-32 6.5H80v-320h80q29 0 51.5 18t27.5 47q38-58 98-91.5T466-780q45 0 85.5 16t74.5 45l170 141q26 21 28.5 53.5T806-466L576-189ZM280-521q-1 41 16.5 77.5T345-381l169 141 230-277-169-141q-24-20-53-30.5T462-699q-75-1-128 51t-54 127Zm231 51Z"/>
</svg>`,
})
export class MsrNestCamOutdoorIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
