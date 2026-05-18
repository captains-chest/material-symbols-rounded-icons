import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-sleep-icon',
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
  [attr.viewBox]="'0 96 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M483 976q-84 0-157.5-32t-128-86.5Q143 803 111 729.5T79 572q0-124 68.5-225T331 199q14-5 29-3.5t25 9.5q8 7 12.5 19.5T402 257q2 79 32 150.5T520 535q56 56 128 86t151 32q21 0 32 3.5t18 11.5q8 10 10.5 26t-2.5 29q-46 115-148 184t-226 69Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463 591q-61-61-97-138t-43-163q-77 43-120.5 118.5T159 572q0 135 94.5 229.5T483 896Zm-20-305Zm207-205-70-32q-12-5-12-18t12-18l70-32 32-70q5-12 18-12t18 12l32 70 70 32q12 5 12 18t-12 18l-70 32-32 70q-5 12-18 12t-18-12l-32-70Z"/>
</svg>`,
})
export class MsrSleepIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
