import { Component, input } from '@angular/core';
import { MsrIconHostDirective } from '../../shared/msr-icon-host.directive';
import { MsrIconSvgDirective } from '../../shared/msr-icon-svg.directive';

@Component({
  selector: 'msr-pin-history-icon',
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
  <path d="M560-420 440-540v-180h80v147l96 97-56 56ZM160-559h80q0 36 9.5 69.5T279-427q28 42 64 77t71 71q18 19 33.5 38t31.5 39q14-20 30.5-39t33.5-38q35-36 71.5-70.5T680-427q20-29 30-63t10-69q0-100-70.5-170.5T479-800q-51 0-97.5 21T302-720h58v80H160v-200h80v69q45-53 107.5-81T479-880q134 0 227.5 93.5T800-559q0 48-14 93t-40 84q-36 54-83 98t-89 92q-16 19-29.5 38T520-114l-7 14q-5 10-14 15t-19 5q-11 0-20-5.5T446-100l-7-14q-11-21-24-40.5T386-192q-42-50-90-92.5T213-382q-28-38-40.5-83.5T160-559Z"/>
</svg>`,
})
export class MsrPinHistoryIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
