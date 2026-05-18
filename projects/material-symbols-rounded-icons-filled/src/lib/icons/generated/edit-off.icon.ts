import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-edit-off-icon',
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
  <path d="M840-704q0 16-5.5 30.5T817-647L650-481q-12 12-28 12t-28-12L481-594q-12-12-12-28t12-28l167-167q12-12 26.5-17.5T705-840q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30ZM764-84 509-338 313-143q-11 11-25.5 17t-30.5 6h-97q-17 0-28.5-11.5T120-160v-96q0-16 6-30.5t17-25.5l196-196L84-764q-12-12-11.5-28T85-820q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28.5T820-84q-12 12-28 12t-28-12Zm-60-564 56-56-56-56-56 56 56 56Z"/>
</svg>`,
})
export class MsrfEditOffIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
