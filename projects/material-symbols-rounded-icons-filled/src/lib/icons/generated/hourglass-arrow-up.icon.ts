import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-hourglass-arrow-up-icon',
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
  [attr.viewBox]="'0 -960 960 960'"
  [attr.aria-hidden]="ariaLabel() ? null : 'true'"
  [attr.aria-label]="ariaLabel()"
  [attr.role]="ariaLabel() ? 'img' : null"
>
  <path d="M160-240v-100q0-42 18-78t50-62q-32-26-50-62t-18-78v-100h-20q-17 0-28.5-11.5T100-760q0-17 11.5-28.5T140-800h400q17 0 28.5 11.5T580-760q0 17-11.5 28.5T540-720h-20v100q0 42-18 78t-50 62q32 26 50 62t18 78v100h20q17 0 28.5 11.5T580-200q0 17-11.5 28.5T540-160H140q-17 0-28.5-11.5T100-200q0-17 11.5-28.5T140-240h20Zm580-408-24 24q-11 11-28 11t-28-11q-11-11-11-28t11-28l92-92q12-12 28-12t28 12l92 92q11 12 11 28.5T899-624q-12 11-28.5 11.5T843-624l-23-23v447q0 17-11.5 28.5T780-160q-17 0-28.5-11.5T740-200v-448Z"/>
</svg>`,
})
export class MsrfHourglassArrowUpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
