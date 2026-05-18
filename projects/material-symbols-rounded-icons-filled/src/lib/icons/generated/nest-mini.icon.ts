import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-nest-mini-icon',
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
  <path d="M300-400q17 0 28.5-11.5T340-440q0-17-11.5-28.5T300-480q-17 0-28.5 11.5T260-440q0 17 11.5 28.5T300-400Zm120 0q17 0 28.5-11.5T460-440q0-17-11.5-28.5T420-480q-17 0-28.5 11.5T380-440q0 17 11.5 28.5T420-400Zm120 0q17 0 28.5-11.5T580-440q0-17-11.5-28.5T540-480q-17 0-28.5 11.5T500-440q0 17 11.5 28.5T540-400Zm120 0q17 0 28.5-11.5T700-440q0-17-11.5-28.5T660-480q-17 0-28.5 11.5T620-440q0 17 11.5 28.5T660-400ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-138 91.5-240.5T440-798v-122q0-17 11.5-28.5T480-960q17 0 28.5 11.5T520-920v122q137 15 228.5 117.5T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/>
</svg>`,
})
export class MsrfNestMiniIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
