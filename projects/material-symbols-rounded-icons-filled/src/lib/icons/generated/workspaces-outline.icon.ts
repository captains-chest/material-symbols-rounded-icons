import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-workspaces-outline-icon',
  imports: [MsrfIconSvgDirective],
  hostDirectives: [MsrfIconHostDirective],
  styles: [`
    :host.msrf-icon {
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: 1em;
      block-size: 1em;
      min-inline-size: 0;
      min-block-size: 0;
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
  [attr.viewBox]="'0 0 24 24'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M6 21Q4.35 21 3.175 19.825Q2 18.65 2 17Q2 15.35 3.175 14.175Q4.35 13 6 13Q7.65 13 8.825 14.175Q10 15.35 10 17Q10 18.65 8.825 19.825Q7.65 21 6 21ZM12 11Q10.35 11 9.175 9.825Q8 8.65 8 7Q8 5.35 9.175 4.175Q10.35 3 12 3Q13.65 3 14.825 4.175Q16 5.35 16 7Q16 8.65 14.825 9.825Q13.65 11 12 11ZM18 21Q16.35 21 15.175 19.825Q14 18.65 14 17Q14 15.35 15.175 14.175Q16.35 13 18 13Q19.65 13 20.825 14.175Q22 15.35 22 17Q22 18.65 20.825 19.825Q19.65 21 18 21Z"/>
</svg>`,
})
export class MsrfWorkspacesOutlineIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
