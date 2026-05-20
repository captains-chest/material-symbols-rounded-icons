import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-float-landscape-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v160q0 17-11.5 28.5T840 536q-17 0-28.5-11.5T800 496V336H160v480h400q17 0 28.5 11.5T600 856q0 17-11.5 28.5T560 896H160Zm560 0q-17 0-28.5-11.5T680 856V656q0-17 11.5-28.5T720 616h120q17 0 28.5 11.5T880 656v200q0 17-11.5 28.5T840 896H720ZM480 576Z"/>
</svg>`,
})
export class MsrFloatLandscapeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
