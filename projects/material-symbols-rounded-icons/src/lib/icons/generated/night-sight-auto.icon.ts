import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-night-sight-auto-icon',
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
  <path d="M440-200q52 0 99-21t81-60q-128-8-214-99.5T320-600q0-13 1-25.5t3-24.5q-57 32-90.5 88T200-440q0 100 70 170t170 70Zm0 80q-134 0-227-93t-93-227q0-58 19-110.5t53-94q34-41.5 81-69T377-748q25-3 39 17.5t1 42.5q-12 20-14.5 42.5T400-600q0 100 70 170t170 70q12 0 24-.5t24-4.5q21-7 36.5 8.5T734-321q-29 94-111.5 147.5T440-120Zm216-480-20 56q-4 11-13 17.5t-20 6.5q-19 0-29.5-15.5T569-568l102-287q4-11 14-18t22-7h26q12 0 22 7t14 18l102 287q6 17-4.5 32.5T837-520q-11 0-20-6.5T804-544l-20-56H656Zm18-54h92l-46-146-46 146ZM407-381Z"/>
</svg>`,
})
export class MsrNightSightAutoIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
