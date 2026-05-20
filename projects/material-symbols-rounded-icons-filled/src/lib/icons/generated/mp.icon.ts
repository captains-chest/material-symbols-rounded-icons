import { Component, input } from '@angular/core';
import { MsrfIconHostDirective } from '../../shared/msrf-icon-host.directive';
import { MsrfIconSvgDirective } from '../../shared/msrf-icon-svg.directive';

@Component({
  selector: 'msrf-mp-icon',
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
  <path d="M300-540h40v90q0 13 8.5 21.5T370-420q13 0 21.5-8.5T400-450v-90h40v150q0 13 8.5 21.5T470-360q13 0 21.5-8.5T500-390v-170q0-17-11.5-28.5T460-600H280q-17 0-28.5 11.5T240-560v170q0 13 8.5 21.5T270-360q13 0 21.5-8.5T300-390v-150Zm300 120h80q17 0 28.5-11.5T720-460v-100q0-17-11.5-28.5T680-600H580q-17 0-28.5 11.5T540-560v170q0 13 8.5 21.5T570-360q13 0 21.5-8.5T600-390v-30Zm0-60v-60h60v60h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
</svg>`,
})
export class MsrfMpIconComponent {
  readonly ariaLabel = input<string | null>(null);
}
