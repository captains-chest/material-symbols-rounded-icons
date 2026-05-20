import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-float-landscape-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v160q0 17-11.5 28.5T840 536H680q-33 0-56.5 23.5T600 616v240q0 17-11.5 28.5T560 896H160Zm560 0q-17 0-28.5-11.5T680 856V656q0-17 11.5-28.5T720 616h120q17 0 28.5 11.5T880 656v200q0 17-11.5 28.5T840 896H720Z"/>
</svg>`,
})
export class MsrfFloatLandscapeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
