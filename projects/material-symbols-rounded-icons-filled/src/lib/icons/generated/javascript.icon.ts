import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-javascript-icon',
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
  <path d="M300-360q-25 0-42.5-17.5T240-420v-10q0-13 8.5-21.5T270-460q13 0 21.5 8.5T300-430v10h60v-150q0-13 8.5-21.5T390-600q13 0 21.5 8.5T420-570v150q0 25-17.5 42.5T360-360h-60Zm220 0q-17 0-28.5-11.5T480-400v-20q0-8 6-14t14-6h20q8 0 14 6t6 14h80v-40H520q-17 0-28.5-11.5T480-500v-60q0-17 11.5-28.5T520-600h120q17 0 28.5 11.5T680-560v20q0 8-6 14t-14 6h-20q-8 0-14-6t-6-14h-80v40h100q17 0 28.5 11.5T680-460v60q0 17-11.5 28.5T640-360H520Z"/>
</svg>`,
})
export class MsrfJavascriptIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
