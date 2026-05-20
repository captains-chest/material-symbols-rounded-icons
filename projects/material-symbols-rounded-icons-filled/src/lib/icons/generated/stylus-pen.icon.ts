import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-stylus-pen-icon',
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
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="m254-371 78-280q4-13 14-21t24-8h30v-44q0-8 1.5-15.5T406-755l49-114q2-5 7-8t10-3h16q5 0 10 3t7 8l49 114q3 8 4.5 15.5T560-724v44h30q14 0 24 8t14 21l78 280q5 19-7 35t-32 16H293q-20 0-32-16t-7-35Zm-39 251q-20 0-32.5-16.5T177-173l5-12q8-25 29-40t47-15h444q26 0 47 15t29 40l5 12q7 20-5.5 36.5T745-120H215Z"/>
</svg>`,
})
export class MsrfStylusPenIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
