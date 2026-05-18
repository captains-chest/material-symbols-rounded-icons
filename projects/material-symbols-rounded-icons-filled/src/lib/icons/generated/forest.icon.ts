import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-forest-icon',
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
  <path d="M520-120v-80h160v80q0 17-11.5 28.5T640-80h-80q-17 0-28.5-11.5T520-120Zm-240 0v-120H73q-24 0-35-21t2-41l114-178q-23 0-34.5-20.5T122-541l205-292q6-8 15-12.5t18-4.5q9 0 18 4.5t15 12.5l205 292q14 20 2.5 40.5T566-480l115 178q13 20 2 41t-35 21H440v120q0 17-11.5 28.5T400-80h-80q-17 0-28.5-11.5T280-120Zm490-120L640-440q24 0 35.5-21.5T673-503L505-743l62-90q6-8 15-12.5t18-4.5q9 0 18 4.5t15 12.5l205 292q14 20 2.5 40.5T806-480l114 178q13 20 2 41t-35 21H770Z"/>
</svg>`,
})
export class MsrfForestIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
