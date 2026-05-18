import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-face-nod-icon',
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
  <path d="M360-160q-134 0-227-93T40-480q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm0-80q100 0 170-70t70-170q0-11-1-21t-3-21q-74 8-143-16.5T332-616q-38 52-93.5 86T120-485q-2 101 68 173t172 72ZM260-400q-17 0-28.5-11.5T220-440q0-17 11.5-28.5T260-480q17 0 28.5 11.5T300-440q0 17-11.5 28.5T260-400Zm200 0q-17 0-28.5-11.5T420-440q0-17 11.5-28.5T460-480q17 0 28.5 11.5T500-440q0 17-11.5 28.5T460-400Zm280 236q58-66 89-147t31-169q0-88-31-169t-89-147v86q0 13-8.5 21.5T710-680q-13 0-21.5-8.5T680-710v-130q0-17 11.5-28.5T720-880h130q13 0 21.5 8.5T880-850q0 13-8.5 21.5T850-820h-51q59 72 90 159t31 181q0 94-31 181t-90 159h51q13 0 21.5 8.5T880-110q0 13-8.5 21.5T850-80H720q-17 0-28.5-11.5T680-120v-130q0-13 8.5-21.5T710-280q13 0 21.5 8.5T740-250v86Z"/>
</svg>`,
})
export class MsrfFaceNodIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
