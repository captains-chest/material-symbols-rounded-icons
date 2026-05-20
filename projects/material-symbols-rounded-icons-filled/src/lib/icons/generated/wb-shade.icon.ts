import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-wb-shade-icon',
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
  <path d="M780-160 560-380v-52q0-14 12-19t22 5l252 252q10 10 5 22t-19 12h-52Zm-220-40v-80l120 120h-80q-17 0-28.5-11.5T560-200Zm-400 0v-360h-32q-14 0-19-12t5-22l178-178q12-12 28-12t28 12l178 178q10 10 5 22t-19 12h-32v360q0 17-11.5 28.5T440-160H200q-17 0-28.5-11.5T160-200Zm120-200h80v-160h-80v160Z"/>
</svg>`,
})
export class MsrfWbShadeIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
