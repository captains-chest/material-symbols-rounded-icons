import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-package-2-icon',
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
  <path d="M440-91v-366L120-642v321q0 22 10.5 40t29.5 29L440-91Zm80 0 280-161q19-11 29.5-29t10.5-40v-321L520-457v366Zm159-550 118-69-277-159q-19-11-40-11t-40 11l-79 45 318 183ZM480-526l119-68-317-184-120 69 318 183Z"/>
</svg>`,
})
export class MsrfPackage2IconComponent {
  readonly ariaLabel = input<string | null>(null);
}
